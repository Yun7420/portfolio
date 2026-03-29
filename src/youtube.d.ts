export {}

declare global {
  interface YTPlayerInstance {
    playVideo: () => void
    pauseVideo: () => void
    getCurrentTime: () => number
    getDuration: () => number
    destroy: () => void
  }

  interface YTNamespace {
    Player: new (
      element: HTMLElement | string,
      options: {
        videoId?: string
        width?: string | number
        height?: string | number
        playerVars?: Record<string, string | number>
        events?: {
          onReady?: (e: { target: YTPlayerInstance }) => void
          onStateChange?: (e: {
            target: YTPlayerInstance
            data: number
          }) => void
        }
      },
    ) => YTPlayerInstance
    PlayerState: {
      PLAYING: number
      PAUSED: number
      BUFFERING: number
      ENDED: number
      CUED: number
    }
  }

  interface Window {
    YT?: YTNamespace
    onYouTubeIframeAPIReady?: () => void
  }
}
