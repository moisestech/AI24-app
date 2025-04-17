declare module '@mux/mux-player-react' {
  import { ForwardRefExoticComponent, RefAttributes } from 'react'

  export interface MuxPlayerProps {
    streamType?: 'on-demand' | 'live' | 'll-live'
    playbackId: string
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    className?: string
    style?: React.CSSProperties
    onPlay?: () => void
    onPause?: () => void
    onError?: (evt: any) => void
  }

  export interface MuxPlayerElement extends HTMLElement {
    play: () => Promise<void>
    pause: () => void
  }

  const MuxPlayer: ForwardRefExoticComponent<MuxPlayerProps & RefAttributes<MuxPlayerElement>>
  export default MuxPlayer
}

export interface MuxPlayerProps {
  streamType?: 'on-demand' | 'live' | 'll-live'
  playbackId: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  className?: string
  style?: React.CSSProperties
  onPlay?: () => void
  onPause?: () => void
  onError?: (evt: any) => void
} 