'use client'

import { motion, AnimatePresence } from 'framer-motion'
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
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          {/* First tagline - larger and glowing */}
          <motion.p
            className={`text-5xl md:text-8xl font-bold text-center px-8 ${styles.taglineGlow}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 