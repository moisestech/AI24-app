'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedWord } from '../AnimatedWord'

interface SloganComponentProps {
  slogan: string
  isVisible: boolean
}

export function SloganComponent({ slogan, isVisible }: SloganComponentProps) {
  if (!isVisible) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slogan}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-major-mono tracking-tighter text-center leading-none bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-magenta-500">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-x-6"
            >
              {slogan.split(' ').map((word, wordIndex) => (
                <AnimatedWord
                  key={wordIndex}
                  word={word}
                  isActive={true}
                  delay={wordIndex * 0.2}
                  wordIndex={wordIndex}
                  allWordsReady={true}
                />
              ))}
            </motion.div>
          </h1>
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 