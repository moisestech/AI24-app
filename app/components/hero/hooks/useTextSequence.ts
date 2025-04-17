'use client'

import { useState, useEffect } from 'react'
import { BRAND } from '../../../constants/brand'
import { TextLayerType } from '../types'

interface TextSequenceState {
  currentType: TextLayerType
  currentText: string
  isTransitioning: boolean
}

export function useTextSequence() {
  const [state, setState] = useState<TextSequenceState>({
    currentType: 'slogan',
    currentText: BRAND.slogans.dynamic[0],
    isTransitioning: false
  })

  const getNextText = (currentType: TextLayerType): { type: TextLayerType, text: string } => {
    switch (currentType) {
      case 'slogan':
        return {
          type: 'mission',
          text: BRAND.positioning.culturalInstitutions.description
        }
      case 'mission':
        return {
          type: 'description',
          text: BRAND.positioning.culturalInstitutions.keyPhrases[0]
        }
      case 'description':
        return {
          type: 'tagline',
          text: BRAND.positioning.culturalInstitutions.tagline
        }
      case 'tagline':
        return {
          type: 'slogan',
          text: BRAND.slogans.dynamic[Math.floor(Math.random() * BRAND.slogans.dynamic.length)]
        }
    }
  }

  const transitionToNext = () => {
    setState(prev => ({ ...prev, isTransitioning: true }))
    
    // Fade out current text
    setTimeout(() => {
      const next = getNextText(state.currentType)
      setState({
        currentType: next.type,
        currentText: next.text,
        isTransitioning: false
      })
    }, 500)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      transitionToNext()
    }, 8000)

    return () => clearInterval(timer)
  }, [transitionToNext])

  return {
    currentText: state.currentText,
    currentType: state.currentType,
    isTransitioning: state.isTransitioning
  }
} 