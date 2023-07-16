"use client"

import type { FC, ReactNode } from 'react'
import React from 'react'

interface UploadPageProps {
  children: ReactNode
}

const UploadPage: FC<UploadPageProps> = ({ children }) => {
  return (
    <>
      <div className="children">{children}</div>
      <style jsx>{`
        .children {
          text-align: center;
          min-height: 230px;
        }
      `}</style>
    </>
  )
}

export default UploadPage