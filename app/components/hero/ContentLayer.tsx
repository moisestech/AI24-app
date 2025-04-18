'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ContentLayerProps } from './types'
import { Button } from '@/components/ui/button'
import { SloganComponent } from './SloganComponent'
import { MissionComponent } from './MissionComponent'
import { DescriptionComponent } from './DescriptionComponent'
import { TaglineComponent } from './TaglineComponent'
import { useTextSequence } from './hooks/useTextSequence'

const ContentLayer: React.FC<ContentLayerProps> = ({
  slogans,
  mission,
  description,
  tagline,
  ctaButtons
}) => {
  const { currentText, currentType, isTransitioning } = useTextSequence()

  return (
    <div className="absolute inset-0">
      <SloganComponent 
        slogan={currentType === 'slogan' ? currentText : slogans[0]} 
        isVisible={currentType === 'slogan'} 
      />
      <MissionComponent 
        mission={currentType === 'mission' ? currentText : mission} 
        isVisible={currentType === 'mission'} 
      />
      <DescriptionComponent 
        description={currentType === 'description' ? currentText : description} 
        isVisible={currentType === 'description'} 
      />
      <TaglineComponent 
        tagline={currentType === 'tagline' ? currentText : tagline} 
        isVisible={currentType === 'tagline'} 
      />
      <div className="absolute bottom-8 left-0 right-0 flex flex-col sm:flex-row gap-4 justify-center">
        {ctaButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            size={button.size}
            className={button.className}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ContentLayer 