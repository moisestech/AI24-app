'use client'

import { motion } from 'framer-motion'
import { SloganComponent } from './SloganComponent'
import { MissionComponent } from './MissionComponent'
import { DescriptionComponent } from './DescriptionComponent'
import { TaglineComponent } from './TaglineComponent'
import { TextLayerType } from './types'
import { useEffect } from 'react'

interface ContentLayerProps {
  activeLayer: TextLayerType
  currentText: string
  isVisible: boolean
}

export function ContentLayer({ activeLayer, currentText, isVisible }: ContentLayerProps) {
  // Debug logs for props
  useEffect(() => {
    console.log('ContentLayer Props:', {
      activeLayer,
      currentText,
      isVisible,
      timestamp: new Date().toISOString()
    })
  }, [activeLayer, currentText, isVisible])

  const renderComponent = () => {
    console.log('Rendering component for layer:', activeLayer)
    
    switch (activeLayer) {
      case 'slogan':
        console.log('Rendering SloganComponent with text:', currentText)
        return (
          <SloganComponent
            slogan={currentText}
            isVisible={isVisible}
          />
        )
      case 'mission':
        console.log('Rendering MissionComponent with text:', currentText)
        return (
          <MissionComponent
            mission={currentText}
            isVisible={isVisible}
          />
        )
      case 'description':
        console.log('Rendering DescriptionComponent with text:', currentText)
        return (
          <DescriptionComponent
            description={currentText}
            isVisible={isVisible}
          />
        )
      case 'tagline':
        console.log('Rendering TaglineComponent with text:', currentText)
        return (
          <TaglineComponent
            tagline={currentText}
            isVisible={isVisible}
          />
        )
      default:
        console.log('No component found for layer:', activeLayer)
        return null
    }
  }

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {renderComponent()}
    </motion.div>
  )
} 