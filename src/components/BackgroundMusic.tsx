import { useCallback, useEffect, useId, useRef, useState } from 'react'
import {
  bgmAudioSrc,
  bgmTrackMeta,
  getBgmYoutubeVideoId,
} from '../data/audioPlaylist'
import { MaterialIcon } from './MaterialIcon'

const FILE_VOLUME = 0.3

function loadYoutubeIframeAPI(): Promise<void> {
  if (window.YT?.Player) {
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    if (!document.querySelector('script[data-yt-iframe-api]')) {
      const s = document.createElement('script')
      s.src = 'https://www.youtube.com/iframe_api'
      s.dataset.ytIframeApi = 'true'
      document.head.append(s)
    }
  })
}

/** 재생 진행도에 따라 테두리가 차는 래퍼 (12시 방향 시작) */
function ConicProgressBorder({
  progress,
  shape,
  className = '',
  children,
}: {
  progress: number
  shape: 'circle' | 'card'
  className?: string
  children: React.ReactNode
}) {
  const p = Math.min(1, Math.max(0, progress))
  const deg = p * 360
  const outer = shape === 'circle' ? 'rounded-full' : 'rounded-xl'
  const innerRadius = shape === 'circle' ? 'rounded-full' : 'rounded-[10px]'

  return (
    <div
      className={`${outer} p-[2px] ${className}`}
      style={{
        background: `conic-gradient(from -90deg, rgba(56,189,248,0.92) ${deg}deg, rgba(39,39,42,0.92) ${deg}deg)`,
      }}
    >
      <div
        className={`${innerRadius} ${shape === 'card' ? 'overflow-hidden' : ''} bg-[#070b14]`}
      >
        {children}
      </div>
    </div>
  )
}

const FILE_VOLUME_REF = FILE_VOLUME

/** 직접 파일: 자동재생 없음 — 원형 버튼으로만 재생 + 테두리 게이지 */
function BackgroundMusicFile({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [paused, setPaused] = useState(true)
  const [progress, setProgress] = useState(0)
  const titleId = useId()

  const toggle = useCallback(() => {
    const el = audioRef.current
    if (!el) return
    el.volume = FILE_VOLUME_REF
    if (el.paused) void el.play().catch(() => {})
    else el.pause()
  }, [])

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    el.pause()
    el.currentTime = 0
  }, [src])

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    const onPlay = () => setPaused(false)
    const onPause = () => setPaused(true)
    const onTime = () => {
      const d = el.duration
      if (!Number.isFinite(d) || d <= 0) {
        setProgress(0)
        return
      }
      setProgress(el.currentTime / d)
    }
    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    el.addEventListener('timeupdate', onTime)
    el.addEventListener('loadedmetadata', onTime)
    return () => {
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('timeupdate', onTime)
      el.removeEventListener('loadedmetadata', onTime)
    }
  }, [])

  const label = paused
    ? `배경음 재생 (${bgmTrackMeta.artist} — ${bgmTrackMeta.title})`
    : '배경음 일시정지'

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        playsInline
        preload="auto"
        className="hidden"
      />
      <div
        className="fixed bottom-6 right-6 z-60 flex flex-col items-end gap-1.5 sm:bottom-8 sm:right-8"
        role="region"
        aria-labelledby={titleId}
      >
        <p
          id={titleId}
          className="font-sans max-w-[11rem] text-right text-[10px] leading-snug text-zinc-600"
        >
          {bgmTrackMeta.artist} — {bgmTrackMeta.title}
          <span className="mt-0.5 block text-zinc-500">
            재생은 버튼을 눌러 시작해요.
          </span>
        </p>
        <ConicProgressBorder
          progress={progress}
          shape="circle"
          className="shadow-lg shadow-black/30"
        >
          <button
            type="button"
            onClick={toggle}
            className="flex h-12 w-12 items-center justify-center rounded-full text-sky-400/90 transition hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
            aria-pressed={!paused}
            aria-label={label}
            title={label}
          >
            <MaterialIcon
              name={paused ? 'music_note' : 'pause'}
              className="!text-[26px]"
            />
          </button>
        </ConicProgressBorder>
      </div>
    </>
  )
}

/** 유튜브: 플레이어는 화면 밖 한 곳만 두고, 재생 버튼으로 패널 열기 + 재생 (별도 상세 버튼 없음) */
function BackgroundMusicYoutube({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayerInstance | null>(null)
  const playPendingRef = useRef(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const titleId = useId()

  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      await loadYoutubeIframeAPI()
      if (cancelled || !window.YT?.Player) return
      const el = containerRef.current
      if (!el) return

      const YT = window.YT
      playerRef.current = new YT.Player(el, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: videoId,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            if (cancelled) return
            setReady(true)
            if (playPendingRef.current) {
              try {
                playerRef.current?.playVideo()
              } catch {
                /* empty */
              }
              playPendingRef.current = false
            }
          },
          onStateChange: (e) => {
            const PS = window.YT?.PlayerState
            if (!PS) return
            setPlaying(
              e.data === PS.PLAYING || e.data === PS.BUFFERING,
            )
          },
        },
      })
    })()

    return () => {
      cancelled = true
      playPendingRef.current = false
      try {
        playerRef.current?.destroy()
      } catch {
        /* empty */
      }
      playerRef.current = null
    }
  }, [videoId])

  useEffect(() => {
    if (!ready) return
    const id = window.setInterval(() => {
      const pl = playerRef.current
      if (!pl) return
      try {
        const d = pl.getDuration()
        const t = pl.getCurrentTime()
        if (Number.isFinite(d) && d > 0) {
          setProgress(t / d)
        }
      } catch {
        /* empty */
      }
    }, 200)
    return () => window.clearInterval(id)
  }, [ready])

  const closePanel = useCallback(() => {
    playPendingRef.current = false
    setPanelOpen(false)
  }, [])

  useEffect(() => {
    if (!panelOpen) return
    const onDown = (e: MouseEvent) => {
      const root = anchorRef.current
      if (!root || root.contains(e.target as Node)) return
      closePanel()
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [panelOpen, closePanel])

  const onMusicButtonClick = useCallback(() => {
    const pl = playerRef.current
    if (playing) {
      pl?.pauseVideo()
      return
    }
    setPanelOpen(true)
    if (ready && pl) {
      pl.playVideo()
    } else {
      playPendingRef.current = true
    }
  }, [playing, ready])

  const label = playing
    ? '배경음 일시정지'
    : `배경음 재생 (${bgmTrackMeta.artist} — ${bgmTrackMeta.title})`

  return (
    <>
      {/* 실제 iframe: 레이아웃만 차지하지 않도록 화면 밖에 고정 (한 인스턴스만 유지) */}
      <div
        className="pointer-events-none fixed top-0 left-[-9999px] z-0 h-[200px] w-[320px] overflow-hidden opacity-0"
        aria-hidden
      >
        <div ref={containerRef} className="h-full w-full" />
      </div>

      <div
        ref={anchorRef}
        className="fixed bottom-6 right-6 z-60 flex flex-col items-end gap-1.5 sm:bottom-8 sm:right-8"
        role="region"
        aria-labelledby={titleId}
      >
        {panelOpen && (
          <div className="font-sans mb-0.5 w-[min(100vw-2rem,16rem)] origin-bottom-right rounded-xl border border-white/[0.08] bg-[#070b14]/95 p-3 shadow-xl shadow-black/40 backdrop-blur-md">
            <p
              id={titleId}
              className="text-[10px] leading-relaxed tracking-wide text-zinc-500"
            >
              {bgmTrackMeta.artist} — {bgmTrackMeta.title}
              <span className="mt-1 block text-zinc-600">
                같은 버튼으로 일시정지·재생할 수 있어요. 영상은 유튜브에서 보실 수
                있어요.
              </span>
            </p>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block overflow-hidden rounded-lg ring-1 ring-white/[0.08]"
            >
              <img
                src={thumbUrl}
                alt=""
                className="aspect-video w-full object-cover"
                width={320}
                height={180}
                loading="lazy"
              />
            </a>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans mt-2 block w-full rounded-lg bg-sky-500/15 py-2 text-center text-[11px] font-medium text-sky-200 ring-1 ring-sky-500/25 transition hover:bg-sky-500/25"
            >
              유튜브에서 열기
            </a>
            <button
              type="button"
              onClick={closePanel}
              className="font-sans mt-2 w-full py-1.5 text-[10px] text-zinc-500 transition hover:text-zinc-300"
            >
              닫기
            </button>
          </div>
        )}

        {!panelOpen && (
          <p
            id={titleId}
            className="font-sans max-w-[11rem] text-right text-[10px] leading-snug text-zinc-600"
          >
            {bgmTrackMeta.artist} — {bgmTrackMeta.title}
            <span className="mt-0.5 block text-zinc-500">
              재생 버튼을 누르면 패널이 열려요.
            </span>
          </p>
        )}

        <ConicProgressBorder
          progress={progress}
          shape="circle"
          className="shadow-lg shadow-black/30"
        >
          <button
            type="button"
            onClick={onMusicButtonClick}
            className="flex h-12 w-12 items-center justify-center rounded-full text-sky-400/90 transition hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
            aria-pressed={playing}
            aria-label={label}
            title={label}
          >
            <MaterialIcon
              name={playing ? 'pause' : 'music_note'}
              className="!text-[26px]"
            />
          </button>
        </ConicProgressBorder>
      </div>
    </>
  )
}

export function BackgroundMusic() {
  const fileSrc = bgmAudioSrc?.trim() || null
  const videoId = getBgmYoutubeVideoId()

  if (fileSrc) {
    return <BackgroundMusicFile src={fileSrc} />
  }
  if (videoId) {
    return <BackgroundMusicYoutube videoId={videoId} />
  }
  return null
}
