import { useState, useEffect } from 'react'
import type { TextLayerType } from '../types'

interface UseLayerSequenceProps {
  initialLayer?: TextLayerType
  sequence?: TextLayerType[]
  interval?: number
}

export function useLayerSequence({
  initialLayer = 'slogan',
  sequence = ['slogan', 'mission', 'description', 'tagline'],
  interval = 5000
}: UseLayerSequenceProps = {}) {
  const [activeLayer, setActiveLayer] = useState<TextLayerType>(initialLayer)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const cycleLayers = () => {
      setIsTransitioning(true)
      const currentIndex = sequence.indexOf(activeLayer)
      const nextIndex = (currentIndex + 1) % sequence.length
      setActiveLayer(sequence[nextIndex])
      
      // Reset transition state after animation
      setTimeout(() => setIsTransitioning(false), 500)
    }

    const timer = setInterval(cycleLayers, interval)
    return () => clearInterval(timer)
  }, [activeLayer, sequence, interval])

  return {
    activeLayer,
    isTransitioning,
    setActiveLayer
  }
} 