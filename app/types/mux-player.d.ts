declare module '@mux/mux-player-react' {
  import { ComponentType } from 'react'

  export interface MuxPlayerProps {
    streamType?: string
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

  const MuxPlayer: ComponentType<MuxPlayerProps>
  export default MuxPlayer
}

export type MuxPlayerProps = {
  streamType?: string
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