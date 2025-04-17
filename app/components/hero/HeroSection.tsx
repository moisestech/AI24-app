'use client'

import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { MediaLayer } from './MediaLayer'
import { ContentLayer } from './ContentLayer'
import { useMediaSequence } from './hooks/useMediaSequence'
import { useTextSequence } from './hooks/useTextSequence'
import { useDebugControls } from './hooks/useDebugControls'
import {
  currentMediaUrlAtom,
  currentMediaTypeAtom,
  currentMediaPosterAtom,
  isMediaPlayingAtom,
  isMediaTransitioningAtom,
  isDebugModeAtom,
  setLayerEffectsAtom
} from './atoms'
import type { MediaItem, CTAButton, HeroSectionProps } from './types'
import { BRAND } from '../../constants/brand'

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'vectrex-spinning',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744890058/ai24/app/video/ai24_vectrex_spinning-30s_tckeux.mp4',
    type: 'video',
    alt: 'Vectrex spinning animation'
  },
  {
    id: 'ai24-yamiichi-part-1',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744894508/ai24/app/video/ai24-yamiichi-part-1_sitvoy.mp4',
    type: 'video',
    alt: 'Hero video 1'
  },
  {
    id: 'ai24-humanagain-part-1',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744907079/ai24/app/video/ai24-humanagain-part-1_pnkkzu.mp4',
    type: 'video',
    alt: 'Hero video 2'
  },
  {
    id: 'ai24-humanagain-part-2',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744907070/ai24/app/video/ai24-humanagain-part-2_btt1vu.mp4',
    type: 'video',
    alt: 'Hero video 2'
  },
  {
    id: 'ai24-humanagain-part-3',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744907094/ai24/app/video/ai24-humanagain-part-3_bzkk40.mp4',
    type: 'video',
    alt: 'Hero video 2'
  },
  {
    id: 'ai24-humanagain-part-4',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744907061/ai24/app/video/ai24-humanagain-part-4_d6fkd4.mp4',
    type: 'video',
    alt: 'Hero video 2'
  },
  {
    id: 'ai24-humanagain-part-5',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744907040/ai24/app/video/ai24-humanagain-part-5_icoucb.mp4',
    type: 'video',
    alt: 'Hero video 2'
  }
]

const CTA_BUTTONS: CTAButton[] = [
  {
    id: 'get-started',
    text: 'Get Started',
    href: '/signup',
    variant: 'default'
  },
  {
    id: 'learn',
    text: 'Learn More',
    href: '/about',
    variant: 'outline'
  }
]

const HeroSection: React.FC<HeroSectionProps> = ({
  mediaItems = MEDIA_ITEMS,
  slogans = [],
  mission = '',
  description = '',
  tagline = '',
  ctaButtons = CTA_BUTTONS,
  isPlaying = false
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isMediaPlaying, setIsMediaPlaying] = useAtom(isMediaPlayingAtom)
  const [isDebugMode] = useAtom(isDebugModeAtom)

  const { currentMedia, isTransitioning } = useMediaSequence({
    mediaItems: mediaItems,
    isPlaying: isMounted,
    interval: 5000
  })

  const { currentText, currentType, isTransitioning: isTextTransitioning } = useTextSequence()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      setIsMediaPlaying(true)
    }
  }, [isMounted, setIsMediaPlaying])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Media Layer */}
      <MediaLayer
        media={currentMedia}
        isPlaying={isMediaPlaying}
      />

      {/* Content Layer */}
      <ContentLayer
        activeLayer={currentType}
        currentText={currentText}
        isVisible={!isTextTransitioning}
      />

      {/* Debug Controls */}
      {isDebugMode && (
        <div className="absolute bottom-4 left-4 bg-black/50 p-4 rounded-lg text-white z-50">
          <pre>
            {JSON.stringify({
              currentType,
              currentText,
              isTextTransitioning,
              isMediaPlaying,
              isTransitioning
            }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default HeroSection 