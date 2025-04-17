'use client'

import { motion } from 'framer-motion'

export default function GlitchBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-black"></div>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-cyan-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: 0,
            right: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 0.3 + Math.random() * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  )
} 