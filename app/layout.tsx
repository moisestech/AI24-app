import type { NextApiRequest } from 'next'
import type { PropsWithChildren, ReactNode } from 'react'

import React from 'react'
import Head from 'next/head'

// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from './database.types'

// import { Session } from '@supabase/supabase-js'
import SupabaseProvider from './supabase-provider'
import Footer from './components/ui/Footer'
import Navbar from './components/Navbar'
import { DataProvider, RequireAuth } from "./context/DataProvider"

import 'styles/main.css'
import 'styles/App.css'
import './globals.css'

const meta = {
  title: 'AI24 Live 🧠 🤖 🎨',
  description: 'Together streaming the future.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://www.ai24.live',
  type: 'website'
}

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ai24live',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const loadTwitterWidget = true

  // const supabase = createServerComponentClient<Database>({ cookies })

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

  return (
    <html lang="en">
      <body className="bg-black loading">

        <Head>
          <title>{metadata.title}</title>
          <link rel="icon" href="/favicon.ico" />

          {metadata?.title && <meta property="og:title" content={metadata?.title} />}
          {metadata?.title && <meta property="twitter:title" content={metadata?.title} />}
          
          {metadata?.description && (
            <meta property="og:description" content={metadata.description} />
          )}
          {metadata?.description && (
            <meta property="twitter:description" content={metadata.description} />
          )}
          {metadata?.cardImage && <meta property="og:image" content={metadata.cardImage} />}
          {metadata?.cardImage && (
            <meta property="twitter:card" content="summary_large_image" />
          )}
          {metadata?.cardImage && <meta property="twitter:image" content={metadata.cardImage} />}
          {loadTwitterWidget && (
            <script
              type="text/javascript"
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
          )}
        </Head>
        
        {/* <SupabaseProvider session={session}> */}
          <DataProvider>
            <Navbar /> {/* session={session} */}
              {/* <main className="container" style={{ padding: '50px 0 100px 0' }}> */}

              <main style={{ padding: '0 0 100px 0' }}>
                {children}
              </main>
              <Footer />
          </DataProvider>
        {/* </SupabaseProvider> */}

      </body>
    </html>
  )
}