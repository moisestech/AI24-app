'use client'

import { useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { isDebugModeAtom } from '../atoms'

export function useDebugControls() {
  const setIsDebugMode = useSetAtom(isDebugModeAtom)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle with either 'D' or 'd'
      if (e.key.toLowerCase() === 'd') {
        setIsDebugMode(prev => !prev)
        console.log('Debug mode toggled')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [setIsDebugMode])
} 