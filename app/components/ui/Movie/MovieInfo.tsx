import type { ReactNode, FC } from "react";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import UseAnimations from "react-useanimations";
import bookmark from "react-useanimations/lib/bookmark";
import MuxPlayer from '@mux/mux-player-react';
import { creators } from "../../../constants/channel-splash";
import { DataContext } from "../../../context/DataProvider";
// import supabase from "../../../../supabase/supabase";

// import YoutubeEmbed from "../Player/Youtube";
import logodefault from "../../../../public/assets/logodefault.svg";
import castdefault from "../../../../public/assets/castdefault.svg";
import { BsFillPlayFill } from "react-icons/bs";

type CodeProps = {
  children: ReactNode
}

const Code = ({ children }: CodeProps) => (
  <>
    <span className="code">{children}</span>
    <style jsx>{`
      .code {
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
        color: #ff2b61;
      }
    `}</style>
  </>
)

type MovieInfoProps = {
  video: { 
    id: number;
    title: string;
    description: string;
    categories: string[];
    mux_playback_id: string;
    creators: string[];
  };
}

interface RouteParams {
  videoid: string;
  [key: string]: string | string[];
}


const MovieInfo: FC<MovieInfoProps> = ({ video }) => {

  const params = useParams<RouteParams>();

  if (params) {

    const { videoid } = params;
    console.log("videoid", videoid);

  } else {

    console.error("No params available");
  }

  
  const [Movie, setMovie] = useState<any>({});
  const [Credit, setCredit] = useState<any>({});
  const [Similar, setSimilar] = useState<any[]>([]);
  const [Video, setVideo] = useState<any>({});
  const [type, setType] = useState<string | null>(null);

  const creatorsMap = new Map(creators.map(creator => [creator.name, creator]));

  const [revealed, setRevealed] = useState(false);

  console.log({ video })

  return (
    <div>
      <div
        className="movie-info"
        style={{
          background: `linear-gradient(to bottom,
          #000000c2 0%,
          #00000013 30%,
          #00000000 50%,
          #0c192133 60%,
          #0c192169 70%,
          var(--bg) 100%), url(${
            "https://image.tmdb.org/t/p/w1280" + Movie.backdrop_path
          })`,
        }}
      >
        <MuxPlayer
          className='absolute w-full z-0'
          streamType="on-demand"
          playbackId={video?.mux_playback_id || ''}
          metadata={{ player_name: 'with-mux-video' }}
          metadataVideoTitle="Placeholder (optional)"
          metadataViewerUserId="Placeholder (optional)"
          muted={false}
          autoPlay={true}
          primaryColor="#00000"
          secondaryColor="#000000"
        />

        <div className="featured">
          <div className="featured-left">
            <div className="featured-icon">
              {type == "m" ? "Movie" : "TV Show"}
            </div>
            <div className="featured-title">
              {/* {type == "m" ? Movie.title : Movie.name} */}
              {video?.title}
            </div>
            <div className="genres">
              {video.categories?.map((category: any, index: number) => (
                <Link
                  key={index}
                  href={`/category/${category}?category=${category}`}
                  // href={`/genre/${item.id}?genre=${item.name}&type=${type}`}
                  className="genre-item"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movie-card-container">
        <div
          className="movie-card"
          data-color="1"
        >
          <div className="movie-card-play movie-card-info">
            <BsFillPlayFill className="movie-info-play" />
          </div>
        </div>
        <div className="movie-card">
          <div className="movie-card-info">
            <div className="movie-card-title" data-style="capital">
              {'EN'}
            </div>
            <div className="movie-card-desc">Language</div>
          </div>
        </div>
        <div className="movie-card">
          <div className="movie-card-info">
            <div className="movie-card-title">{'05-06-22'}</div>
            <div className="movie-card-desc">Release</div>
          </div>
        </div>
        <div className="movie-card">
          <div className="movie-card-info">
            <div className="movie-card-title">
              {/* {(Movie.runtime / 60)?.toFixed(1)} hrs */}
              {'3m 20s'}
            </div>
            <div className="movie-card-desc">Runtime</div>
          </div>
        </div>
      </div>

      <div className="featured-desc">
        {video?.description}
      </div>

      <div className="movie-info-container">
        <div className="movie-info-title title">Featured Creators:</div>
        <div className="movie-info-desc">
        {video?.creators.map((creatorName: string, index: number) => {
            const creator = creatorsMap.get(creatorName);
            return creator ? (
              <>
                 <div key={creator.id} className="movie-info-item">
                    <img
                      className="movie-info-item-img"
                      src={creator.image}
                      alt={creator.name}
                      width={90}
                      height={90}
                    />
                    <Link href={creator.link}>{creator.name}</Link>
                  </div>
              </>
            ): null;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
