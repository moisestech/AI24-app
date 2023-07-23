import type { FC } from 'react'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import MoviePreview from "./MoviePreview";
import { channelPop, channelNFT, channelGen, channelTV, channelGAN, channelEducation, channelMusicVideos, channelAIIA, channelAIFilms, channelKaiber, channelAIAmbient, channelText2Video, channelAI3D } from '../../../constants/channel-splash';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface MovieRowProps {
  index: number;
  genre?: number;
  title?: string | null;
  type?: string;
  handleScroll: (index: number, distance: number) => void;
  setContainerRef: (index: number) => any; // Adjust the type based on your usage
}

const MovieRow: FC<MovieRowProps> = ({
  index,
  genre = 80,
  title = null,
  type = "gen",
  handleScroll,
  setContainerRef,
}) => {
  const [Data, setData] = useState(channelGen);

  console.log({ type })

  useEffect(() => {
    if (type === "pop") {
      // tmdb
      //   .moviePopular()
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelPop)
    } else if (type === "gen") {
      // tmdb
      //   .discoverMovie({ with_genres: genre, include_adult: false })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelGen)
    } else if (type === "nft") {
      // tmdb
      //   .discoverMovie({ with_genres: genre, include_adult: false })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelNFT)
    } else if (type === "tv") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelTV)
    } else if (type === "gan") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelGAN)
    } else if (type === "music-videos") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelMusicVideos)
    } else if (type === "ai-3d") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelAI3D)
    } else if (type === "education") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelEducation)
    } else if (type === "ai-films") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelAIFilms)
    } else if (type === "aiia") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelAIIA)
    } else if (type === "ai-ambient") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelAIAmbient)
    } else if (type === "kaiber") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelKaiber)
    } else if (type === "text2video") {
      // tmdb
      //   .discoverTv({ with_networks: 213 })
      //   .then((res) => {
      //     setData(res.results.filter((a) => a.backdrop_path !== null));
      //     // console.log(res.results.filter((a) => a.backdrop_path !== null));
      //   })
      //   .catch(toast.error);
      setData(channelText2Video)
    }
  }, [type, genre]);

  return (
    <div className="channel-container">
      {(type == "gen" || type == "tv" || type ) && <div className="title">{title}</div>}
      <div className="arrow-container">
        <button
          className="arrow left-arrow"
          onClick={() => handleScroll(index, -664)}
        >
          <FaChevronLeft />
        </button>

        <button
          className="arrow right-arrow"
          onClick={() => handleScroll(index, 664)}
        >
          <FaChevronRight />
        </button>
      </div>
      <div ref={setContainerRef(index)} className="popular">
        {Data.map((video, i) => {
          console.log({ video })
          console.log(video.mux_playback_id)

          return (
            <MoviePreview key={i} video={video} />
          )
        })}
      </div>
      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
          padding: 0;
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .card:hover .card-overlay {
          opacity: 1;
        }
        
        .card-overlay img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

export default MovieRow;
