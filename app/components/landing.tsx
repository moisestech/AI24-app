"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  Brain, BookOpen, Code2, Users, Sparkles, ArrowRight, ArrowDown, 
  Palette, GraduationCap, Building2, Users2
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import LandingHero from './landing/LandingHero'
import { useBrandContent } from '../hooks/useBrandContent'
import { AnimatedWord } from './AnimatedWord'
import React from "react"

const offerings = [
  {
    icon: Brain,
    title: "Cultural R&D",
    description: "Explore the intersection of technology and culture. Prototype, publish, and perform your ideas using next-gen creative tools.",
    features: [
      "Generative storytelling pipelines",
      "Interactive media installations",
      "AI-powered workshops for museums, classrooms, and collectives"
    ]
  },
  {
    icon: BookOpen,
    title: "Prompt Literacy",
    description: "Build fluency in the new language of creation. Learn how to communicate with machines while staying grounded in your artistic voice.",
    features: [
      "AI prompt-writing & visual branding",
      "Prompt-based curriculum design",
      "Educator toolkits & lesson scaffolds"
    ]
  },
  {
    icon: Code2,
    title: "Creative Technology",
    description: "Use AI as a co-creator, not a shortcut. Design workflows where authenticity, agency, and automation can coexist.",
    features: [
      "Augmented creativity & custom pipelines",
      "Live AI installations & streaming systems",
      "Personalized microsites & artist tools"
    ]
  },
  {
    icon: Users,
    title: "Community & Collaboration",
    description: "Join a growing network of interdisciplinary creatives, cultural institutions, and forward-thinking educators.",
    features: [
      "Curated collabs & commissions",
      "Residency-style support",
      "Cross-sector mentorship & peer learning"
    ]
  }
]

const targetAudience = [
  {
    icon: Palette,
    title: "Artists",
    description: "seeking to experiment with AI without compromising craft"
  },
  {
    icon: GraduationCap,
    title: "Curators & Educators",
    description: "designing interactive, tech-driven public programs"
  },
  {
    icon: Building2,
    title: "Cultural Institutions",
    description: "exploring new modes of engagement & digital storytelling"
  },
  {
    icon: Users2,
    title: "Nonprofits & Collectives",
    description: "looking to build sustainable, future-facing practices"
  }
]

// Custom Input Component
const CustomInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="flex h-10 w-full rounded-md border border-cyan-400/30 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-cyan-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        ref={ref}
        {...props}
      />
    )
  }
)
CustomInput.displayName = "CustomInput"

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [email, setEmail] = useState("")
  const { displayText, glitchIndex, description, tagline, currentWordIndex, allWordsReady } = useBrandContent()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const sections = container.querySelectorAll('section')
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = window.innerHeight

      sections.forEach((section, index) => {
        const sectionRect = section.getBoundingClientRect()
        const sectionTop = sectionRect.top - containerTop
        const sectionBottom = sectionTop + sectionRect.height

        if (sectionTop <= containerHeight / 2 && sectionBottom >= containerHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-mono overflow-y-auto snap-y snap-mandatory glitch-bg">
      {/* Hero Section */}
      <LandingHero />

      {/* What We Offer Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-major-mono mb-8 text-center glitch-text" data-text="What We Offer">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
              >
                <offering.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-cyan-300">{offering.title}</h3>
                <p className="text-cyan-200/80 mb-4">{offering.description}</p>
                <ul className="space-y-2">
                  {offering.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-cyan-200/60">
                      <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Who Is It For Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-major-mono mb-8 text-center holographic-text">
            Who Is It For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-colors"
              >
                <audience.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-cyan-300">{audience.title}</h3>
                <p className="text-cyan-200/80">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Now Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-major-mono mb-8 neon-text">
            Why Now?
          </h2>
          <p className="text-xl text-cyan-300 mb-8">
            In a world flooded with synthetic media, AI24 helps you stand out — not by working harder, but by working smarter. We offer tools that return care, taste, and cultural relevance to the creative process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 glitch-text" data-text="Start a Project">
              <Link href="/signup">
                Start a Project <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 glitch-text" data-text="Join the Network">
              <Link href="/community">Join the Network</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-major-mono mb-4 scanline-text">
            Join Our Signal List
          </h2>
          <p className="text-lg text-cyan-300 mb-8">
            Sign up to receive artist calls, residency opportunities, tool drops, and stories from the AI24 community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 glitch-text"
              data-text="Subscribe"
            >
              Subscribe
            </Button>
          </div>
        </motion.div>
      </section>

      <ScrollPrompt />
    </div>
  )
}

function ScrollPrompt() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-50"
      style={{ opacity }}
    >
      <span className="text-cyan-400 text-sm mb-2 font-space-grotesk">Scroll to explore</span>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
        <ArrowDown className="w-6 h-6 text-cyan-400" />
      </motion.div>
    </motion.div>
  )
} 