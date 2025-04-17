import type { PropsWithChildren, ReactNode } from 'react'
import React from 'react'
import { cookies } from 'next/headers'
import { Database } from './database.types'
import SupabaseProvider from './supabase-provider'
import Footer from './components/ui/Footer'
import AlienNavbar from './components/ui/Navbar/AlienNavbar'
import { DataProvider, RequireAuth } from "./context/DataProvider"
import { Space_Grotesk, Major_Mono_Display } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

// Define fonts
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const majorMono = Major_Mono_Display({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'AI24 Live 🧠 🤖 🎨',
  description: 'Together streaming the future.',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'AI24 Live 🧠 🤖 🎨',
    description: 'Together streaming the future.',
    url: 'https://www.ai24.live',
    siteName: 'AI24 Live',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI24 Live 🧠 🤖 🎨',
    description: 'Together streaming the future.',
    images: ['/og.png'],
    creator: '@ai24live',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.className} ${majorMono.className}`}>
      <body className="bg-black loading">
        <DataProvider>
          <AlienNavbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  )
}