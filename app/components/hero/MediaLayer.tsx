'use client'

import { VideoPlayer } from './VideoPlayer'
import { MediaItem } from './types'
import { CSSProperties } from 'react'

interface MediaLayerProps {
  media: MediaItem
  isPlaying: boolean
  opacity?: number
  blur?: number
  brightness?: number
}

export function MediaLayer({
  media,
  isPlaying,
  opacity = 1,
  blur = 0,
  brightness = 1
}: MediaLayerProps) {
  const mediaStyle: CSSProperties = {
    opacity,
    filter: `blur(${blur}px) brightness(${brightness})`,
    transition: 'all 0.5s ease-in-out',
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    position: 'absolute',
    top: 0,
    left: 0
  }

  return (
    <div className="relative w-full h-full">
      {media.type === 'video' ? (
        <VideoPlayer
          url={media.url}
          isPlaying={isPlaying}
          style={mediaStyle}
        />
      ) : (
        <img
          src={media.url}
          alt={media.alt || ''}
          style={mediaStyle}
        />
      )}
      {/* Overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity duration-500"
        style={{ opacity: 0.5 }}
      />
    </div>
  )
} 