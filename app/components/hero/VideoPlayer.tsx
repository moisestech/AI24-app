'use client'

import { useEffect, useRef } from 'react'

interface VideoPlayerProps {
  url: string
  isPlaying: boolean
  style?: React.CSSProperties
}

export function VideoPlayer({ url, isPlaying, style }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        console.log('Attempting to play video:', url)
        videoRef.current.play().catch((error: Error) => {
          console.error('Error playing video:', error)
        })
      } else {
        console.log('Pausing video:', url)
        videoRef.current.pause()
      }
    }
  }, [isPlaying, url])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleLoadedMetadata = () => {
        console.log('Video metadata loaded:', url)
        // Set a random start time between 0 and 90% of the video duration
        const randomTime = Math.random() * video.duration * 0.9
        video.currentTime = randomTime
      }

      const handleError = (e: Event) => {
        console.error('Video error:', e)
      }

      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('error', handleError)
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('error', handleError)
      }
    }
  }, [url])

  return (
    <video
      ref={videoRef}
      src={url}
      style={style}
      muted
      loop
      playsInline
      autoPlay
    />
  )
} 