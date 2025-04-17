"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  items?: string[]
}

interface ScrollSectionContentProps {
  type: 'features' | 'audience' | 'cta' | 'newsletter'
  content: {
    features?: Feature[]
    audience?: string[]
    cta?: {
      title: string
      description: string
      buttons: {
        text: string
        href: string
        variant: 'default' | 'outline'
      }[]
    }
    newsletter?: {
      title: string
      description: string
    }
  }
  isActive: boolean
}

export function ScrollSectionContent({ type, content, isActive }: ScrollSectionContentProps) {
  const renderFeatures = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {content.features?.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-black/50 border-white/10 hover:border-white/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <feature.icon className="w-6 h-6 mr-2 text-cyan-400" />
                <h4 className="text-xl font-bold">{feature.title}</h4>
              </div>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              {feature.items && (
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )

  const renderAudience = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {content.audience?.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <p className="text-lg">{item}</p>
        </motion.div>
      ))}
    </div>
  )

  const renderCTA = () => (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-xl text-gray-300 mb-12"
      >
        {content.cta?.description}
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {content.cta?.buttons.map((button, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Button
              size="lg"
              variant={button.variant}
              className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 glitch-text"
            >
              <a href={button.href}>
                {button.text} <ArrowRight className="ml-2" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderNewsletter = () => (
    <div className="max-w-2xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-xl text-gray-300 mb-8"
      >
        {content.newsletter?.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white/40"
        />
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 glitch-text"
        >
          Subscribe
        </Button>
      </motion.div>
    </div>
  )

  switch (type) {
    case 'features':
      return renderFeatures()
    case 'audience':
      return renderAudience()
    case 'cta':
      return renderCTA()
    case 'newsletter':
      return renderNewsletter()
    default:
      return null
  }
} 