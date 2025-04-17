'use client'

import React from 'react'
import HeroSection from '../hero/HeroSection'
import type { MediaItem, CTAButton } from '../hero/types'
import { useBrandContent } from '../../hooks/useBrandContent'
import { BRAND } from '../../constants/brand'

// Responsive media items with different qualities for different devices
const mediaItems: MediaItem[] = [
  {
    id: 'vectrex-spinning',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744890058/ai24/app/video/ai24_vectrex_spinning-30s_tckeux.mp4',
    type: 'video',
    alt: 'Vectrex spinning animation',
    thumbnail: '/images/vectrex-thumbnail.jpg',
    mux_playback_id: 'your-mux-playback-id' // Add your Mux playback ID here
  },
  {
    id: 'ai24-yamiichi-part-1',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744894508/ai24/app/video/ai24-yamiichi-part-1_sitvoy.mp4',
    type: 'video',
    alt: 'Hero video 1',
    thumbnail: '/images/yamiichi-thumbnail.jpg',
    mux_playback_id: 'your-mux-playback-id' // Add your Mux playback ID here
  },
  {
    id: 'ai24-yamiichi-part-2',
    url: 'https://res.cloudinary.com/dck5rzi4h/video/upload/v1744861569/ai24/app/video/ai24-manifesto_ygmpdr.mp4',
    type: 'video',
    alt: 'Hero video 2',
    thumbnail: '/images/manifesto-thumbnail.jpg',
    mux_playback_id: 'your-mux-playback-id' // Add your Mux playback ID here
  }
]

const CTA_BUTTONS: CTAButton[] = [
  {
    id: 'get-started',
    text: 'Get Started',
    label: 'Get Started',
    href: '/signup',
    variant: 'default',
    className: 'w-full md:w-auto' // Responsive width
  },
  {
    id: 'learn',
    text: 'Learn More',
    label: 'Learn More',
    href: '/about',
    variant: 'outline',
    className: 'w-full md:w-auto' // Responsive width
  }
]

const LandingHero: React.FC = () => {
  const { displayText, description, tagline } = useBrandContent()

  return (
    <div className="relative w-full min-h-screen">
      <HeroSection
        mediaItems={mediaItems}
        slogans={[displayText]}
        mission={BRAND.values.authenticity}
        description={description}
        tagline={tagline}
        ctaButtons={CTA_BUTTONS}
        isPlaying={true}
      />
    </div>
  )
}

export default LandingHero 