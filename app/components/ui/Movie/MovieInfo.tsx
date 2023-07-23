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
    user_id: string;
    title: string;
    description: string;
    genre: string[];
    categories: string[];
    hashtags: string[];
    mux_playback_id: string; 
  };
}
const MovieInfo: FC<MovieInfoProps> = ({ video }) => {
  const { videoid } = useParams();
  // const { WatchList, setWatchList, History, setHistory, User } =
  //   useContext(DataContext);

  const [Movie, setMovie] = useState<any>({});
  const [Credit, setCredit] = useState<any>({});
  const [Similar, setSimilar] = useState<any[]>([]);
  const [Video, setVideo] = useState<any>({});
  const [type, setType] = useState<string | null>(null);

  const creatorsMap = new Map(creators.map(creator => [creator.name, creator]));

  // useEffect(() => {
  //   const fetchMovieData = async () => {
  //     const { data: video, error: videoError } = await supabase
  //       .from("videos")
  //       .select("*")
  //       .eq("id", videoid)
  //       .single();
    
  //     if (videoError) {
  //       console.error("Error fetching movie data:", videoError.message);
  //       return;
  //     }
    
  //     // setMovie(movie);
  //     setType(video.category); // Set the type based on the 'category' property
  //   };

  //   switch (type) {
  //     case "movie": { // Update the case for movies
  //       // Fetch additional movie data from TMDB or any other source
  //       break;
  //     }
  //     case "tv-show": { // Update the case for TV shows
  //       // Fetch additional TV show data from TMDB or any other source
  //       break;
  //     }
  //     case "person": { // Update the case for persons
  //       // Fetch additional person data from TMDB or any other source
  //       break;
  //     }
  //     default:
  //       break;
  //   }

  //   const fetchMovieCredits = async () => {
  //     // Fetch movie credits from TMDB or any other source
  //     // Replace this code with your actual implementation
  //     // Example:
  //     // const { data: credits, error: creditsError } = await supabase
  //     //   .from("credits")
  //     //   .select("*")
  //     //   .eq("movie_id", movieid)
  //     //   .single();
  //     // setCredit(credits);

  //     // Temporary mock data for demonstration purposes
  //     setCredit({
  //       cast: [
  //         { name: "Actor 1", profile_path: "path_to_image1.jpg" },
  //         { name: "Actor 2", profile_path: "path_to_image2.jpg" },
  //         { name: "Actor 3", profile_path: "path_to_image3.jpg" },
  //       ],
  //     });
  //   };

  //   const fetchSimilarMovies = async () => {
  //     // Fetch similar movies from TMDB or any other source
  //     // Replace this code with your actual implementation
  //     // Example:
  //     // const { data: similar, error: similarError } = await supabase
  //     //   .from("similar_movies")
  //     //   .select("*")
  //     //   .eq("movie_id", movieid);
  //     // setSimilar(similar);

  //     // Temporary mock data for demonstration purposes
  //     setSimilar([
  //       { title: "Similar Movie 1", vote_average: 7.5 },
  //       { title: "Similar Movie 2", vote_average: 8.0 },
  //       { title: "Similar Movie 3", vote_average: 6.5 },
  //     ]);
  //   };

  //   const fetchVideoData = async () => {
  //     // Fetch video data from Mux or any other source
  //     // Replace this code with your actual implementation
  //     // Example:
  //     // const { data: video, error: videoError } = await supabase
  //     //   .from("videos")
  //     //   .select("*")
  //     //   .eq("id", movieid)
  //     //   .single();
  //     // setVideo(video);

  //     // Temporary mock data for demonstration purposes
  //     setVideo({ key: "video_key" });
  //   };

  //   fetchMovieData();
  //   fetchMovieCredits();
  //   fetchSimilarMovies();
  //   fetchVideoData();
  // }, [videoid]);

  // const handleWatchList = (videoid: string) => {
  //   if (WatchList.includes(videoid.toString())) {
  //     setWatchList(WatchList.filter((item) => item !== videoid.toString()));
  //   } else {
  //     setWatchList([...WatchList, videoid.toString()]);
  //   }
  // };

  // const handleUpdate = async () => {
  //   if (WatchList.length > 0 || History.length > 0) {
  //     const { error } = await supabase
  //       .from("AI24")
  //       .insert({ userid: User, history: History, watch_list: WatchList });
  //     if (error)
  //       await supabase
  //         .from("AI24")
  //         .update({ history: History, watch_list: WatchList })
  //         .eq("userid", User);
  //   }
  // };

  // useEffect(() => {
  //   handleUpdate();
  // }, [WatchList, History]);

  const [revealed, setRevealed] = useState(false);

  // const handleReveal = (videoid: string) => {
  //   if (!History.includes(videoid.toString())) {
  //     setHistory([...History, videoid.toString()]);
  //   }
  //   if (!revealed) window.scrollTo({ top: 500, behavior: "smooth" });
  //   setRevealed(!revealed);
  // };

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
          autoplay={true}
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
          {/* <div className="featured-right">
            {Movie.vote_average?.toFixed(1)} &#9733;
            <UseAnimations
              onClick={() => handleWatchList(Movie.id + type)}
              reverse={WatchList?.includes(Movie?.id?.toString() + type)}
              fillColor="white"
              strokeColor="white"
              style={{ cursor: "pointer" }}
              animation={bookmark}
              size={56}
            />
          </div> */}
        </div>
      </div>
      <div className="movie-card-container">
        <div
          className="movie-card"
          data-color="1"
          onClick={() => handleReveal(Movie.id + type)}
        >
          <div className="movie-card-play movie-card-info">
            <BsFillPlayFill className="movie-info-play" />
          </div>
        </div>
        <div className="movie-card">
          <div className="movie-card-info">
            <div className="movie-card-title" data-style="capital">
              {/* {Movie.original_language} */}
              {'EN'}
            </div>
            <div className="movie-card-desc">Language</div>
          </div>
        </div>
        <div className="movie-card">
          <div className="movie-card-info">
            {/* <div className="movie-card-title">
              {type == "m" ? Movie.release_date : Movie.first_air_date}
            </div> */}
            <div className="movie-card-title">{'05-06-22'}</div>
            <div className="movie-card-desc">Release</div>
            
          </div>
        </div>
        <div className="movie-card">
          {/* {type == "m" ? (
            <div className="movie-card-info">
              <div className="movie-card-title">
                {(Movie.runtime / 60)?.toFixed(1)} hrs
              </div>
              <div className="movie-card-desc">Runtime</div>
            </div>
          ) : (
            <div className="movie-card-info">
              <div className="movie-card-title">
                S{Movie?.last_episode_to_air?.season_number} E
                {Movie?.last_episode_to_air?.episode_number}
              </div>
              <div className="movie-card-desc">Latest Episode</div>
            </div>
          )} */}
          <div className="movie-card-info">
            <div className="movie-card-title">
              {/* {(Movie.runtime / 60)?.toFixed(1)} hrs */}
              {'3m 20s'}
            </div>
            <div className="movie-card-desc">Runtime</div>
          </div>
        </div>
      </div>

      {/* <div className={`video-container ${revealed && "revealed"}`}>
        <YoutubeEmbed embedId={Video?.key} />
      </div> */}

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

      {/* <div key={index} className="movie-info-item">
        {item.profile_path ? (
          <img
            className="movie-info-item-img"
            src={"https://image.tmdb.org/t/p/w92" + item.profile_path}
            alt="test"
          />
        ) : (
          <div className="  " style={{ textAlign: "center" }}>
            <img
              src={castdefault}
              alt=""
              style={{ maxWidth: "92px", maxHeight: "115px" }}
            />
          </div>
        )}
        <div className="movie-info-item-title">{item.name}</div>
      </div> */}

      {/* <div className="movie-info-container">
        <div className="movie-info-title title">Production Companies:</div>
        <div className="movie-info-desc">
          {Movie.production_companies?.slice(0, 5).map((item: any, index: number) => (
            <>
              <div key={index} className="movie-info-item">
                {item.logo_path ? (
                  <img
                    className="movie-info-item-img company-logo"
                    src={"https://image.tmdb.org/t/p/w92" + item.logo_path}
                    alt="not-found"
                  />
                ) : (
                  <div className="  " style={{ textAlign: "center" }}>
                    <img
                      src={logodefault}
                      alt=""
                      style={{ maxHeight: "4rem" }}
                    />
                  </div>
                )}
                <div className="movie-info-item-title">{item.name}</div>
              </div>
            </>
          ))}
        </div>
      </div> */}

      {/* <div className="movie-info-container">
        <div className="movie-info-title title">
          {type === "t" ? "Similar TV shows" : "Similar Movies:"}
        </div>
        <div className="popular">
          {Similar?.slice(0, 3).map((item: any, index) => (
            <>
              <Link
                key={index}
                href={`/${item.id}${type == "t" ? "t" : "m"}`}
                className="card"
                style={{
                  background: `url(${
                    "https://image.tmdb.org/t/p/w300" + item.backdrop_path
                  })`,
                }}
              >
                <div className="card-info">
                  <div className="card-title">
                    {type == "t" ? item.name : item.title}
                  </div>
                  <div className="card-rating">{item.vote_average} &#9733;</div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default MovieInfo;
