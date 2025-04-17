'use client'

import React from "react"
import Modules from "../modules/modules"

interface Module {
  [key: string]: any
}

interface PageContentProps {
  modules?: Module[]
}

export default function PageContent({ modules }: PageContentProps) {
  return (
    <main className="main page">
      <Modules modules={modules} />
    </main>
  )
} 