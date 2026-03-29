/** 화면에 표시할 곡 정보 */
export const bgmTrackMeta = {
  title: '밤',
  artist: 'DORI',
} as const

/**
 * **권장:** `public/audio/`에 mp3 등을 두고 여기에 경로를 넣으면 `<audio>`로 재생합니다.
 * 유튜브 임베드보다 끊김 없고, 계정·브라우저 영향이 적습니다. (사용 권리 있는 파일만)
 * 예: '/audio/dori-bam.mp3'
 * `null`이면 아래 유튜브 설정을 사용합니다.
 */
export const bgmAudioSrc: string | null = null

/**
 * 유튜브(www) / 유튜브 뮤직 공유 링크 또는 영상 ID (11자).
 * `bgmAudioSrc`가 있으면 이 값은 사용하지 않습니다.
 */
export const bgmYoutubeLinkOrId =
  'https://www.youtube.com/watch?v=7KgUMhVlVQU'

export function parseYoutubeVideoId(input: string): string | null {
  const s = input.trim()
  if (!s) return null
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s
  try {
    const u = new URL(s)
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      const id = u.pathname.split('/').filter(Boolean)[0]
      return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null
    }
    if (host.includes('youtube.com')) {
      const v = u.searchParams.get('v')
      if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v
      const m = u.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/)
      if (m) return m[1]
    }
  } catch {
    return null
  }
  return null
}

export function getBgmYoutubeVideoId(): string | null {
  return parseYoutubeVideoId(bgmYoutubeLinkOrId)
}
