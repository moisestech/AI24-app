export type TextLayerType = 'slogan' | 'mission' | 'description' | 'tagline'

export type MediaType = 'image' | 'video'

export interface MediaItem {
  id: string | number
  url: string
  type: MediaType
  thumbnail?: string
  alt?: string
  title?: string
  mux_playback_id?: string
  image?: string
  src?: string
  playbackId?: string
}

export interface CTAButton {
  id: string
  text: string
  href: string
  variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export interface HeroSectionProps {
  mediaItems?: MediaItem[]
  slogans?: string[]
  mission?: string
  description?: string
  tagline?: string
  ctaButtons?: CTAButton[]
  isPlaying?: boolean
}

export interface MediaLayerProps {
  media: MediaItem | null
  isPlaying?: boolean
}

export interface ContentLayerProps {
  children: React.ReactNode
}

export interface TextLayerProps {
  text: string
  isVisible?: boolean
}

export interface MissionComponentProps extends TextLayerProps {}
export interface DescriptionComponentProps extends TextLayerProps {}
export interface TaglineComponentProps extends TextLayerProps {}

export interface InteractionLayerProps {
  buttons: CTAButton[]
  isVisible?: boolean
}

export interface HeroState {
  currentMedia: MediaItem | null;
  currentSlogan: string;
  isPlaying: boolean;
  activeTextLayer: TextLayerType;
  interactionState: {
    hoveredButton: string | null;
    activeButton: string | null;
  };
} 