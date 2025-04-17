"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedWordProps {
  word: string
  isActive: boolean
  delay?: number
  wordIndex: number
  allWordsReady: boolean
}

export function AnimatedWord({ word, isActive, delay = 0, wordIndex, allWordsReady }: AnimatedWordProps) {
  const [glitchActive, setGlitchActive] = useState(false)
  const [glitchInterval, setGlitchInterval] = useState(3000 + Math.random() * 2000)

  useEffect(() => {
    console.log(`Word ${wordIndex}: isActive=${isActive}, word="${word}"`)
    if (!isActive) return

    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 100)
      setGlitchInterval(3000 + Math.random() * 2000)
    }, glitchInterval)

    return () => clearInterval(interval)
  }, [isActive, glitchInterval, word, wordIndex])

  return (
    <motion.span
      className="inline-block mr-6 px-2 text-white"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: allWordsReady && isActive ? 1 : 0,
        scale: glitchActive ? [1, 1.05, 0.95, 1] : 1,
        x: glitchActive ? [0, 4, -4, 0] : 0
      }}
      transition={{ 
        duration: 0.5,
        delay: allWordsReady ? delay : 0,
        ease: "easeOut",
        scale: { duration: 0.1 },
        x: { duration: 0.1 }
      }}
      style={{
        textShadow: glitchActive 
          ? `
            -4px 0 0 rgba(255, 0, 0, 1),
            4px 0 0 rgba(0, 255, 0, 1),
            0 0 25px rgba(0, 255, 255, 0.8)
          `
          : `
            0 0 25px rgba(0, 255, 255, 0.8)
          `
      }}
    >
      {word}
    </motion.span>
  )
} 