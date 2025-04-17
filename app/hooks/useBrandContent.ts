"use client"

import { useState, useEffect } from 'react'
import { BRAND } from '../constants/brand'

export function useBrandContent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState(BRAND.slogans.dynamic[0])
  const [glitchIndex, setGlitchIndex] = useState(-1)
  const [description, setDescription] = useState('')
  const [tagline, setTagline] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [allWordsReady, setAllWordsReady] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BRAND.slogans.dynamic.length)
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const newSlogan = BRAND.slogans.dynamic[currentIndex]
    const words = newSlogan.split(' ')
    
    // Get a random positioning for variety
    const positioningKeys = Object.keys(BRAND.positioning)
    const randomPositioningKey = positioningKeys[Math.floor(Math.random() * positioningKeys.length)]
    const randomPositioning = BRAND.positioning[randomPositioningKey as keyof typeof BRAND.positioning]
    
    // Start the animation sequence
    const animateSequence = async () => {
      setIsTyping(true)
      setCurrentWordIndex(0)
      setAllWordsReady(false)
      
      // Fade out current content
      setDisplayText('')
      setDescription('')
      setTagline('')
      
      // Wait for fade out
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // First, add all words to the DOM without animation
      setDisplayText(newSlogan)
      
      // Wait a moment for the DOM to update
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Mark all words as ready for animation
      setAllWordsReady(true)
      
      // Then animate each word in sequence
      for (let i = 0; i < words.length; i++) {
        setCurrentWordIndex(i)
        await new Promise(resolve => setTimeout(resolve, 200)) // 200ms between words
      }
      
      // Wait before showing description
      await new Promise(resolve => setTimeout(resolve, 500))
      setDescription(randomPositioning.description)
      
      // Wait before showing tagline
      await new Promise(resolve => setTimeout(resolve, 500))
      setTagline(randomPositioning.tagline)
      
      setIsTyping(false)
      
      // Start subtle glitch effect only after typing is complete
      const glitchInterval = setInterval(() => {
        setGlitchIndex(Math.floor(Math.random() * newSlogan.length))
        setTimeout(() => setGlitchIndex(-1), 100)
      }, 3000) // Glitch every 3 seconds
      
      return () => clearInterval(glitchInterval)
    }
    
    animateSequence()
  }, [currentIndex])

  return { displayText, glitchIndex, description, tagline, isTyping, currentWordIndex, allWordsReady }
} 