import { useState, useEffect } from 'react'

interface UseContentRandomizerProps {
  slogans: string[]
  mission: string
  description: string
  tagline: string
}

interface UseContentRandomizerReturn {
  currentContent: {
    slogan: string
    mission: string
    description: string
    tagline: string
  }
}

export const useContentRandomizer = ({
  slogans = [],
  mission = '',
  description = '',
  tagline = ''
}: UseContentRandomizerProps): UseContentRandomizerReturn => {
  const [currentContent, setCurrentContent] = useState({
    slogan: slogans[0] || '',
    mission,
    description,
    tagline
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent({
        slogan: slogans[Math.floor(Math.random() * slogans.length)] || '',
        mission,
        description,
        tagline
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [slogans, mission, description, tagline])

  return { currentContent }
} 