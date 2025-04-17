'use client'

import MuxPlayer from '@mux/mux-player-react'
import { CSSProperties } from 'react'

interface VideoPlayerProps {
  src?: string
  playbackId?: string
  isPlaying: boolean
  style?: CSSProperties
}

export function VideoPlayer({ src, playbackId, isPlaying, style }: VideoPlayerProps) {
  if (!playbackId && !src) {
    console.error('VideoPlayer requires either src or playbackId')
    return null
  }

  if (playbackId) {
    return (
      <MuxPlayer
        playbackId={playbackId}
        autoPlay={true}
        muted={true}
        loop={true}
        style={style}
      />
    )
  }

  return (
    <video
      src={src}
      autoPlay={true}
      muted={true}
      loop={true}
      playsInline={true}
      style={style}
    />
  )
} 