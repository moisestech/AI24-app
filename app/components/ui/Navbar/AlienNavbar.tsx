"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  QrCode, 
  Info, 
  BookOpen, 
  Calendar, 
  Video,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import the Logo component to avoid SSR issues
const Logo = dynamic(() => import('../../icons/Logo'), {
  ssr: false,
  loading: () => <div className="w-8 h-8 bg-gray-800 rounded-full animate-pulse" />
})

import styles from './AlienNavbar.module.css'

const navItems = [
  { 
    name: 'INFO', 
    icon: Info,
    href: '/info',
    qrText: 'Learn about AI24'
  },
  { 
    name: 'WORKSHOPS', 
    icon: BookOpen,
    href: '/workshops',
    qrText: 'Explore our workshops'
  },
  { 
    name: 'EVENTS', 
    icon: Calendar,
    href: '/events',
    qrText: 'Join our events'
  },
  { 
    name: 'LIVESTREAMS', 
    icon: Video,
    href: '/livestreams',
    qrText: 'Watch our livestreams'
  }
]

const socialItems = [
  { 
    name: 'Instagram', 
    icon: Instagram,
    href: 'https://instagram.com'
  },
  { 
    name: 'Twitter', 
    icon: Twitter,
    href: 'https://twitter.com'
  },
  { 
    name: 'Youtube', 
    icon: Youtube,
    href: 'https://youtube.com'
  }
]

export default function AlienNavbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [glitchIndex, setGlitchIndex] = useState<number>(-1)
  const [isGlitching, setIsGlitching] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setGlitchIndex(Math.floor(Math.random() * navItems.length))
      setTimeout(() => {
        setIsGlitching(false)
        setGlitchIndex(-1)
      }, 100)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-8 h-8 bg-gray-800 rounded-full animate-pulse" />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Logo className="w-10 h-10 text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-magenta-400/20 rounded-full blur-sm" />
            </motion.div>
          </Link>

          {/* Main Navigation */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isItemGlitching = glitchIndex === index
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-blue-500 transition-all duration-300 ${styles.navItem}`}
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <motion.div
                    animate={{
                      scale: isItemGlitching ? [1, 1.1, 0.9, 1] : 1,
                      x: isItemGlitching ? [0, 2, -2, 0] : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={styles.socialIcon}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span 
                    className={`text-sm font-medium ${isItemGlitching ? styles.glitched : ''}`}
                    data-text={item.name}
                  >
                    {item.name}
                  </span>
                  
                  {/* QR Code on hover */}
                  {activeItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`${styles.qrHover} absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg`}
                    >
                      <QrCode className="w-24 h-24" />
                      <span className="block text-xs text-center mt-2">
                        {item.qrText}
                      </span>
                    </motion.div>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialItems.map((item, index) => {
              const Icon = item.icon
              const isItemGlitching = glitchIndex === index + navItems.length
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:via-green-500 hover:to-blue-500 transition-all duration-300"
                >
                  <motion.div
                    animate={{
                      scale: isItemGlitching ? [1, 1.1, 0.9, 1] : 1,
                      rotate: isItemGlitching ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={styles.socialIcon}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
} 