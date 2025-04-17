'use client'

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import styles from './styles/textEffects.module.css'

interface TaglineComponentProps {
  tagline: string
  isVisible: boolean
}

export function TaglineComponent({ tagline, isVisible }: TaglineComponentProps) {
  if (!tagline) return null

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className={`text-3xl md:text-5xl font-medium text-center px-8 ${styles.taglineGradient}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 