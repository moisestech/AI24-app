'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import type { MediaItem } from './types'
import type { MuxPlayerProps as MuxPlayerRefProps } from '@mux/mux-player-react'

// Define MuxPlayer props type
type MuxPlayerProps = {
  streamType: 'on-demand'
  playbackId: string
  autoPlay: boolean
  muted: boolean
  loop: boolean
  className: string
  style: React.CSSProperties
  onPlay: () => void
  onPause: () => void
  onError: (evt: ErrorEvent) => void
}

// Wrapper component to ensure MuxPlayer is only rendered on client
const ClientOnlyMuxPlayer = dynamic(
  () => import('@mux/mux-player-react').then((mod) => {
    const MuxPlayer = mod.default
    return function WrappedMuxPlayer(props: MuxPlayerProps) {
      // Ensure consistent props between server and client
      const muxProps = {
        ...props,
        streamType: 'on-demand' as const,
        autoPlay: true,
        muted: true,
        loop: true,
      }
      return <MuxPlayer {...muxProps} />
    }
  }),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-black">
        <img
          src="/images/placeholder.jpg"
          alt="Loading..."
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

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Always render a placeholder on server and initial client render
  if (!isMounted) {
    return (
      <div className="absolute inset-0 w-full h-full bg-black">
        <img
          src={media.thumbnail || '/images/placeholder.jpg'}
          alt="Loading..."
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
          <ClientOnlyMuxPlayer
            streamType="on-demand"
            playbackId={media.mux_playback_id}
            autoPlay={true}
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
              objectFit: 'cover'
            }}
            onPlay={() => console.log('Mux player started playing')}
            onPause={() => console.log('Mux player paused')}
            onError={(evt: ErrorEvent) => console.error('Mux player error:', evt)}
          />
        ) : (
          <img
            src={media.url}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
    </div>
  )
}

export default MuxPlayerComponent 