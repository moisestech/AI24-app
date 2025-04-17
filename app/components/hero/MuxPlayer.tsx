'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import type { MediaItem } from './types'
import type { MuxPlayerProps } from '../../types/mux-player'

// Import MuxPlayer with proper type
const MuxPlayer = dynamic(
  () => import('@mux/mux-player-react'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-black">
        <img
          src="/images/placeholder.jpg"
          alt="Loading video..."
          className="w-full h-full object-cover"
        />
      </div>
    )
  }
)

interface MuxPlayerComponentProps {
  media: MediaItem
  isPlaying: boolean
}

const MuxPlayerComponent: React.FC<MuxPlayerComponentProps> = ({ media, isPlaying }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle video errors
  const handleError = (evt: any) => {
    console.error('Video error:', evt)
    setIsError(true)
  }

  // Always render a placeholder on server and initial client render
  if (!isMounted || isError) {
    return (
      <div className="absolute inset-0 w-full h-full bg-black">
        <img
          src={media.thumbnail || '/images/placeholder.jpg'}
          alt={media.alt || 'Video thumbnail'}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  // Only render Mux player after hydration
  return (
    <div className="absolute inset-0 w-full h-full">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {media.type === 'video' && media.mux_playback_id ? (
          <MuxPlayer
            streamType="on-demand"
            playbackId={media.mux_playback_id}
            autoPlay={isPlaying}
            muted={true}
            loop={true}
            className="w-full h-full"
            style={{
              opacity: 1,
              filter: 'blur(0px) brightness(100%)',
              transition: 'all 0.3s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover' as const
            }}
            onPlay={() => console.log('Video playing')}
            onPause={() => console.log('Video paused')}
            onError={handleError}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-black">
            <img
              src={media.thumbnail || '/images/placeholder.jpg'}
              alt={media.alt || 'Media thumbnail'}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default MuxPlayerComponent 