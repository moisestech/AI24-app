'use client'

import React from 'react'
import { ContentLayerProps } from './types'
import { Button } from '@/components/ui/button'

const ContentLayer: React.FC<ContentLayerProps> = ({
  slogans,
  mission,
  description,
  tagline,
  ctaButtons
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {slogans[0]}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          {mission}
        </p>
        <p className="text-lg text-white/70 mb-12">
          {description}
        </p>
        <p className="text-sm text-white/60 mb-8">
          {tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </div>
  )
}

export default ContentLayer 