'use client'

import React, { useState, useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface VideoTestProps {
  src: string
  type?: 'mp4' | 'm3u8'
  poster?: string
  className?: string
}

const VideoTest: React.FC<VideoTestProps> = ({ src, type = 'mp4', poster, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleError = (e: ErrorEvent) => {
      console.error('Video error:', e)
      setError('Failed to load video')
      setIsLoading(false)
    }

    const handleCanPlay = () => {
      setIsLoading(false)
      setError(null)
    }

    video.addEventListener('error', handleError)
    video.addEventListener('canplay', handleCanPlay)

    if (type === 'm3u8' && Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 30,
        maxMaxBufferLength: 600,
        maxBufferSize: 60 * 1000 * 1000,
        maxBufferHole: 0.5,
        enableWorker: true,
        lowLatencyMode: true
      })

      hls.loadSource(src)
      hls.attachMedia(video)

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError()
              break
            default:
              hls.destroy()
              break
          }
        }
      })

      return () => {
        hls.destroy()
        video.removeEventListener('error', handleError)
        video.removeEventListener('canplay', handleCanPlay)
      }
    } else if (type === 'mp4') {
      video.src = src
    }

    return () => {
      video.removeEventListener('error', handleError)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [src, type])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-cyan-400">Loading video...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-red-400">{error}</div>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        playsInline
        autoPlay
        muted
        loop
      />
    </div>
  )
}

export default VideoTest 