'use client'

import type { FC } from 'react'
import React from 'react'
import { useState, useEffect, useRef } from "react";

import MuxPlayer from '@mux/mux-player-react';
import AuthForm from './auth-form'
import Navbar from './components/Navbar'
import Manifesto from './components/Manifesto'
import MovieRow from "./components/ui/Movie/MovieRow";

import { Button, Typography } from "antd";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import "../styles/App.css";
import '../styles/onDemand.css'
const { Text } = Typography;

export function Intro() {
  return (
    <div className="flex">
      <Manifesto />
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}

const App: FC = () => {
  const [Bg, setBg] = useState(
    "https://image.tmdb.org/t/p/w1280/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg"
  );

  const [Featured, setFeatured] = useState({});

  const bgarray = ["603692m", "502356m", "119051t", "100088t"];
  useEffect(() => {
    for (let i = 0; i < bgarray.length; i++) {
      const method =
        bgarray[i].charAt(bgarray[i].length - 1) === "m"
          ? "movieInfo"
          : "tvInfo";

      // setTimeout(
      //   () => {
      //     tmdb[method]({ id: bgarray[i] })
      //       .then((res) => {
      //         if (res.backdrop_path) {
      //           setFeatured(res);
      //           setBg("https://image.tmdb.org/t/p/w1280" + res.backdrop_path);
      //         }
      //       })
      //       .catch(console.error);
      //   },
      //   i === 0 ? 0 : 10000 * i
      // );
    }
  }, []);

  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setContainerRef = (index: number) => (ref: HTMLDivElement | null) => {
    containerRefs.current[index] = ref;
  };

  const handleScroll = (index: number, scrollOffset: number) => {
    const newScrollLeft = (containerRefs.current[index]?.scrollLeft || 0) + scrollOffset;
    containerRefs.current[index]?.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div
        className="master"
        style={{
          background: 
          `linear-gradient(to bottom,
          #000000c2 0%,
          #00000013 30%,
          #00000000 50%,
          #0c192133 60%,
          #0c192169 70%,
          var(--bg) 100%), url(${Bg})`,
        }}
      >
        <article className='absolute top-0 z-0 overflow-hidden w-full' style={{ maxHeight: 1080 }}>
          {/* <video className='z-0' width="100%" height="100%" autoPlay={true} muted={true} controls={false} loop={true}>
            <source src="https://ztayztewkwilmqlcvtox.supabase.co/storage/v1/object/sign/ai24-creator/featured-video/zeroscope_v2_xl_part1.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhaTI0LWNyZWF0b3IvZmVhdHVyZWQtdmlkZW8vemVyb3Njb3BlX3YyX3hsX3BhcnQxLm1wNCIsImlhdCI6MTY4NzcxMjc5NCwiZXhwIjoxNzE5MjQ4Nzk0fQ.tsN0WhKTiHdJC0CNXCSJr9Lm7rA9gkARzZ-53Gsctyg&t=2023-06-25T17%3A06%3A34.182Z" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}

          <MuxPlayer
            className='mux-player'
            streamType="on-demand"
            playbackId="CH6vKfURI3mrhIGC3TZ1dCSWNYDxDm7myS84L9F2qRU"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />

          <div className="trailer-vignette vignette-layer"></div>
          <div className="hero-vignette vignette-layer"></div>
        </article>

        <div className="featured z-10">
          <div className="featured-left">
            <div className="featured-icon">Featured</div>
            <div className="featured-title">
              {/* {Featured.title || Featured.name || "loading..."} */}
              {'Artificial Planet' || 'loading...'}
            </div>
            <div className="featured-desc" style={{ maxWidth: 450 }}>
              {/* {Featured.overview || "loading..."} */}
              {'Oscar-winning series of art short films bringing to life creativity in this stunning animation musical tale.' || "loading..."}
            </div>

            <article className='flex'>
              <Button className='flex bg-white h-12 w-32 mt-5 items-center justify-center mr-4'>
                <FaPlay className='text-black mr-4 text-xl' />
                <Text className='text-lg font-bold'>{'Play'}</Text>
              </Button>

              <Button className='flex bg-zinc-600	 h-12 w-42 mt-5 border-none items-center justify-center'>
                <BiInfoCircle className='text-white mr-4 text-2xl' />
                <Text className='text-white text-lg font-bold'>{'More Info'}</Text>
              </Button>
            </article>
          </div>
        </div>
      </div>

      <MovieRow key='pop'
        {...{
          index: 0,
          type: "pop",
          handleScroll,
          setContainerRef,
        }}

        
      />

      <MovieRow key='music-videos'
        {...{
          index: 0,
          genre: 37,
          type: "music-videos",
          title: "AI Music Videos",
          handleScroll,
          setContainerRef,
        }}
      />

      <MovieRow key='nft'
        {...{
          index: 1,
          genre: 37,
          type: "nft",
          title: "AI Art NFTs",
          handleScroll,
          setContainerRef,
        }}
      />

      <MovieRow key='ai-films'
        {...{
          index: 0,
          genre: 37,
          type: "ai-films",
          title: "AI Films",
          handleScroll,
          setContainerRef,
        }}
      />

      <MovieRow key='ai-3d'
        {...{
          index: 0,
          genre: 37,
          type: "ai-3d",
          title: "AI 3D",
          handleScroll,
          setContainerRef,
        }}
      />

      <MovieRow key='aiia'
        {...{
          index: 0,
          genre: 37,
          type: "aiia",
          title: "Artificial Intelligence Infused Art",
          handleScroll,
          setContainerRef,
        }}
      />

      <MovieRow key='ai-ambient'
        {...{
          index: 0,
          genre: 37,
          type: "ai-ambient",
          title: "AI Ambient",
          handleScroll,
          setContainerRef,
        }}
      />

      <MovieRow key='gan'
        {...{
          index: 0,
          genre: 37,
          type: "gan",
          title: "GANs",
          handleScroll,
          setContainerRef,
        }}
      />
    </div>
  );
}

export default App;

{/* <MovieRow key='lore-machine'
  {...{
    index: 1,
    genre: 37,
    type: "tv",
    title: "Lore Machine Originals",
    handleScroll,
    setContainerRef,
  }}
/>
<MovieRow key='animated'
  {...{
    index: 2,
    genre: 16,
    title: "Animated",
    handleScroll,
    setContainerRef,
  }}
/>
<MovieRow key='action'
  {...{
    index: 3,
    genre: 28,
    title: "Action",
    handleScroll,
    setContainerRef,
  }}
/>
<MovieRow key='comedy'
  {...{
    index: 4,
    genre: 35,
    title: "Comedy",
    handleScroll,
    setContainerRef,
  }}
/>
<MovieRow key='scifi'
  {...{
    index: 5,
    genre: 878,
    title: "Sci-Fi",
    handleScroll,
    setContainerRef,
  }}
/>
<MovieRow key='crime'
  {...{
    index: 6,
    genre: 80,
    title: "Crime",
    handleScroll,
    setContainerRef,
  }}
/>
<MovieRow key='adventure'
  {...{
    index: 7,
    genre: 12,
    title: "Adventure",
    handleScroll,
    setContainerRef,
  }}
/>
<MovieRow key='western'
  {...{
    index: 8,
    genre: 37,
    title: "Western",
    handleScroll,
    setContainerRef,
  }}
/> */}