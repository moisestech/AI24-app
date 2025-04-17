'use client'

import { useState, useEffect, useCallback } from 'react'
import { BRAND } from '../../../constants/brand'

export function useRandomSlogan(interval = 10000) {
  const [currentSlogan, setCurrentSlogan] = useState('')
  const [previousSlogans, setPreviousSlogans] = useState<string[]>([])

  const getRandomSlogan = useCallback(() => {
    const availableSlogans = BRAND.slogans.dynamic.filter(
      slogan => !previousSlogans.includes(slogan)
    )

    // If we've used all slogans, reset the history
    if (availableSlogans.length === 0) {
      setPreviousSlogans([])
      return BRAND.slogans.dynamic[Math.floor(Math.random() * BRAND.slogans.dynamic.length)]
    }

    const randomIndex = Math.floor(Math.random() * availableSlogans.length)
    const newSlogan = availableSlogans[randomIndex]

    // Keep track of last 3 slogans to prevent immediate repeats
    setPreviousSlogans(prev => {
      const updated = [...prev, newSlogan]
      return updated.length > 3 ? updated.slice(1) : updated
    })

    return newSlogan
  }, [previousSlogans])

  useEffect(() => {
    // Set initial slogan
    setCurrentSlogan(getRandomSlogan())

    // Update slogan at interval
    const timer = setInterval(() => {
      setCurrentSlogan(getRandomSlogan())
    }, interval)

    return () => clearInterval(timer)
  }, [getRandomSlogan, interval])

  return currentSlogan
} 