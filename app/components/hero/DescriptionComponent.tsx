'use client'

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import styles from './styles/textEffects.module.css'

interface DescriptionComponentProps {
  description: string
  isVisible: boolean
}

export function DescriptionComponent({ description, isVisible }: DescriptionComponentProps) {
  if (!description) return null

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className={`text-3xl md:text-5xl font-medium text-white text-center px-8 ${styles.descriptionGlitch}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 