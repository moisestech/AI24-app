'use client'

import React from 'react'
import { MediaType, MediaLayerProps } from './types'

const MediaLayer: React.FC<MediaLayerProps> = ({
  mediaUrl,
  mediaType,
  mediaPoster,
  isPlaying,
  isTransitioning
}) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {mediaType === 'video' ? (
        <video
          className="w-full h-full object-cover"
          src={mediaUrl}
          poster={mediaPoster}
          autoPlay={isPlaying}
          muted
          loop
          playsInline
        />
      ) : (
        <img
          className="w-full h-full object-cover"
          src={mediaUrl}
          alt="Hero background"
        />
      )}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500" />
      )}
    </div>
  )
}

export default MediaLayer 