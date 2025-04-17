'use client'

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import styles from './styles/textEffects.module.css'

interface MissionComponentProps {
  mission: string
  isVisible: boolean
}

export function MissionComponent({ mission, isVisible }: MissionComponentProps) {
  if (!mission) return null

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
            className={`text-5xl md:text-7xl font-bold text-white text-center px-8 ${styles.missionGlow}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {mission}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 