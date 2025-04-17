"use client"

import { motion } from "framer-motion"
import { ScrollSectionContent } from "./ScrollSectionContent"

interface ScrollSectionProps {
  title: string
  description: string
  type: 'features' | 'audience' | 'cta' | 'newsletter'
  content: any
  isActive: boolean
}

export function ScrollSection({ title, description, type, content, isActive }: ScrollSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold mb-6 glitch-text"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-300 mb-12"
        >
          {description}
        </motion.p>
        <ScrollSectionContent
          type={type}
          content={content}
          isActive={isActive}
        />
      </div>
    </motion.div>
  )
} 