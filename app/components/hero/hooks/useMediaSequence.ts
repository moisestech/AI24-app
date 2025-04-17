import { useState, useEffect } from 'react'
import type { MediaItem } from '../types'

interface UseMediaSequenceProps {
  mediaItems: MediaItem[]
  isPlaying: boolean
  interval?: number
  onMediaChange?: (media: MediaItem) => void
}

export function useMediaSequence({
  mediaItems,
  isPlaying,
  interval = 5000,
  onMediaChange
}: UseMediaSequenceProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentMedia = mediaItems[currentMediaIndex]

  useEffect(() => {
    if (!isPlaying || mediaItems.length <= 1) return

    const timer = setInterval(() => {
      console.log('Switching to next media')
      setIsTransitioning(true)

      // After fade out, update to next media
      setTimeout(() => {
        const nextIndex = (currentMediaIndex + 1) % mediaItems.length
        setCurrentMediaIndex(nextIndex)
        
        if (onMediaChange) {
          onMediaChange(mediaItems[nextIndex])
        }

        // End transition
        setTimeout(() => {
          setIsTransitioning(false)
        }, 500)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [isPlaying, currentMediaIndex, mediaItems, interval, onMediaChange])

  return {
    currentMedia,
    currentMediaIndex,
    isTransitioning,
    setCurrentMediaIndex,
    setIsTransitioning
  }
} 