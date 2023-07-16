"use client"

import type { FC, ReactNode } from 'react'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import MuxPlayer from '@mux/mux-player-react'
import Link from 'next/link'
import Spinner from '../../components/ui/Spinner/Spinner'
import MovieInfo from '../../components/ui/Movie/MovieInfo'
import useVideo from '../../hooks/useVideo'


const VideoPage: FC = () => {
  const params = useParams()
  const { id } = params as { id: string }
  const { video, loading } = useVideo(id || '')

  // const [poster, setPoster] = useState<string | null>(null);

  // useEffect(() => {
  //   if (playbackId) {
  //     const poster = `https://image.mux.com/${playbackId}/thumbnail.png`
  //     setPoster(poster)
  //   }
  // }, [playbackId])

  // console.log("playbackId: ", playbackId)

  console.log({ id })
  console.log({ video, loading })

  if (loading) {
    return (
      <Spinner />
    )
  }

  return (
    <section id="video-info-page">
      {video ? <MovieInfo video={video} /> : null}
    </section>
  )
}

export default VideoPage