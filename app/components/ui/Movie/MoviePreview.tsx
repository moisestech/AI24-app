import type { FC } from 'react';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

interface MoviePreviewProps {
  video?: {
    id: string | number;
    title: string;
    vote_average: number; // Change to 'vote_average' instead of 'voteAverage'
    mux_playback_id: string; // Add the 'mux_playback_id' property
    image: string; // Add the 'image' property
    mux_preview_gif: string; // Add the 'mux_preview_gif' property
  };
}


const MoviePreview: FC<MoviePreviewProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };


  console.log({ video })

  // const previewUrl = `https://image.mux.com/${video?.mux_playback_id}/thumbnail.png?width=214&height=121`

  return (  
    <>
    {video &&
      <Link 
          key={video.id} 
          className="card"
          href={`/v/${video.id}`} 
          
        >
          <Image 
              src={video?.image} width={214} height={121} 
              alt="Video Preview" 
              className="thumbnail max-w-full max-h-full absolute w-full" 
              style={{
                background: `${video?.image}`,
              }}
            />

      

      <div
        className={`card-info absolute group overflow-hidden rounded-md hover:shadow-lg transition-shadow duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
      >
        

        <article
          className={`card-overlay absolute inset-0 top-0 flex items-center justify-center ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <img
            src={video?.mux_preview_gif}
            alt="Preview"
          />

          <article className="absolute inset-0 flex items-end justify-center">
            <div className="p-4 bg-white w-full" style={{ background: '#00000087' }}>
              <span className="card-title font-bold text-white">
                {/* {type == "tv" ? video.name : video.title} */}
                {video.title}
              </span>
              <span className="card-rating text-white">{video?.vote_average} &#9733;</span>
            </div>
          </article>

        </article>
      </div>
    </Link>   
    }
    </>
  )
};

export default MoviePreview;