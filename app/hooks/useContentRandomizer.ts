'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { BRAND } from '../constants/brand'

interface ContentHistory {
  slogans: string[]
  taglines: string[]
  descriptions: string[]
  missions: string[]
}

interface ContentState {
  slogan: string
  tagline: string
  description: string
  mission: string
  positioning: keyof typeof BRAND.positioning
}

export function useContentRandomizer() {
  const [contentState, setContentState] = useState<ContentState>({
    slogan: '',
    tagline: '',
    description: '',
    mission: '',
    positioning: 'culturalInstitutions'
  })

  const [contentHistory, setContentHistory] = useState<ContentHistory>({
    slogans: [],
    taglines: [],
    descriptions: [],
    missions: []
  })

  // Get all available content
  const allSlogans = useMemo(() => [...BRAND.slogans.dynamic, ...BRAND.slogans.static], [])
  const allPositionings = Object.keys(BRAND.positioning) as Array<keyof typeof BRAND.positioning>

  // Helper function to get random item with history tracking
  const getRandomItem = useCallback((
    items: string[],
    history: string[],
    maxHistory: number = 3
  ): string => {
    // Filter out recently used items
    const availableItems = items.filter(item => !history.includes(item))
    
    // If we've used all items, reset history
    if (availableItems.length === 0) {
      return items[Math.floor(Math.random() * items.length)]
    }

    // Get random item from available ones
    const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)]
    
    // Update history
    const newHistory = [...history, randomItem]
    if (newHistory.length > maxHistory) {
      newHistory.shift()
    }
    
    return randomItem
  }, [])

  // Update all content at once
  const updateContent = useCallback(() => {
    // Get random positioning
    const randomPositioning = allPositionings[Math.floor(Math.random() * allPositionings.length)]
    const positioningData = BRAND.positioning[randomPositioning]

    // Update each content type with history tracking
    const newSlogan = getRandomItem(allSlogans, contentHistory.slogans)
    const newTagline = getRandomItem(
      [positioningData.tagline],
      contentHistory.taglines,
      1
    )
    const newDescription = getRandomItem(
      [positioningData.description],
      contentHistory.descriptions,
      1
    )
    const newMission = getRandomItem(
      [BRAND.positioning.culturalInstitutions.description],
      contentHistory.missions,
      1
    )

    // Update state
    setContentState({
      slogan: newSlogan,
      tagline: newTagline,
      description: newDescription,
      mission: newMission,
      positioning: randomPositioning
    })

    // Update history
    setContentHistory(prev => ({
      slogans: [...prev.slogans, newSlogan].slice(-3),
      taglines: [...prev.taglines, newTagline].slice(-1),
      descriptions: [...prev.descriptions, newDescription].slice(-1),
      missions: [...prev.missions, newMission].slice(-1)
    }))
  }, [allSlogans, allPositionings, contentHistory, getRandomItem])

  // Initialize content
  useEffect(() => {
    updateContent()
  }, [])

  // Set up interval for content rotation
  useEffect(() => {
    const interval = setInterval(updateContent, 8000)
    return () => clearInterval(interval)
  }, [updateContent])

  return {
    ...contentState,
    updateContent
  }
} 