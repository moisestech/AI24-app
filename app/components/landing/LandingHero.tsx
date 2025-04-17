'use client'

import React from 'react'
import HeroSection from '../hero/HeroSection'
import type { MediaItem, CTAButton } from '../hero/types'
import { useBrandContent } from '../../hooks/useBrandContent'
import { BRAND } from '../../constants/brand'

const mediaItems: MediaItem[] = [
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
    id: 'ai24-yamiichi-part-2',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744861569/ai24/app/video/ai24-manifesto_ygmpdr.mp4',
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

const LandingHero: React.FC = () => {
  const { displayText, description, tagline } = useBrandContent()

  return (
    <HeroSection
      mediaItems={mediaItems}
      slogans={[displayText]}
      mission={BRAND.values.authenticity}
      description={description}
      tagline={tagline}
      ctaButtons={CTA_BUTTONS}
      isPlaying={true}
    />
  )
}

export default LandingHero 