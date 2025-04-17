export const MEDIA_CONFIG = {
  TRANSITION_DURATION: 500, // ms
  MEDIA_DURATION: 4000, // ms
  MISSION_DURATION: 8000, // ms
  PRELOAD_COUNT: 2, // Number of items to preload
  FALLBACK_IMAGE: '/images/fallback.jpg',
  VIDEO_POSTER: '/images/video-poster.jpg',
  QUALITY_THRESHOLDS: {
    mobile: 480,
    tablet: 720,
    desktop: 1080
  }
}

export const MEDIA_TYPES = {
  VIDEO: 'video',
  IMAGE: 'image'
} as const

export const DEBUG_SHORTCUTS = {
  TOGGLE_DEBUG: 'd',
  PLAY_PAUSE: ' ',
  NEXT: 'ArrowRight',
  PREV: 'ArrowLeft',
  JUMP_TO: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
} as const 