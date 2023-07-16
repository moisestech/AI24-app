// import React, { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
// // import tmdb from "../tmdb";
// import Nav from "./Nav";

// function Genre() {
//   const { genreid } = useParams();
//   console.log("genreid", genreid);
//   const location = useLocation();
//   const navigate = useNavigate();
//   var genre = new URLSearchParams(location.search).get("genre");
//   var type = new URLSearchParams(location.search).get("type");
//   const [Data, setData] = useState([]);

//   const handleTypeChange = () => {
//     if (type === "m") {
//       const genreList = {
//         28: 10759,
//         12: 10759,
//         878: 10765,
//         10752: 10768,
//         14: 10765,
//       };
//       var newgenreid = genreList[genreid];
//       if (newgenreid === undefined) {
//         newgenreid = genreid;
//       }
//       type = "t";
//     } else {
//       const genreList = {
//         10759: 28,
//         10759: 12,
//         10765: 878,
//         10768: 10752,
//       };
//       var newgenreid = genreList[genreid];
//       if (newgenreid === undefined) {
//         newgenreid = genreid;
//       }
//       type = "m";
//     }
//     navigate("/genre/" + newgenreid + "?genre=" + genre + "&type=" + type);
//   };

//   useEffect(() => {
//     switch (type) {
//       case "m": {
//         tmdb
//           .discoverMovie({ with_genres: genreid, include_adult: false })
//           .then((res) => {
//             setData(res.results.filter((a) => a.backdrop_path !== null));
//             console.log(res.results.filter((a) => a.backdrop_path !== null));
//           })
//           .catch(console.error);
//         break;
//       }

//       case "t": {
//         tmdb
//           .discoverTv({ with_genres: genreid, include_adult: false })
//           .then((res) => {
//             console.log(res);
//             setData(res.results.filter((a) => a.backdrop_path !== null));
//             console.log(res.results.filter((a) => a.backdrop_path !== null));
//           })
//           .catch(console.error);
//         break;
//       }
//     }
//   }, [type]);

//   return (
//     <div>
//       <div
//         className="page-header"
//         style={{
//           background: `linear-gradient(
//                       to bottom,
//                       #000000c2 0%,
//                       #00000013 30%,
//                       #00000000 50%,
//                       #0c192133 60%,
//                       #0c192169 70%,
//                       var(--bg) 100%),
//                       url(https://image.tmdb.org/t/p/w1280${Data[0]?.backdrop_path})`,
//         }}
//       >
//         <div className="header-title">
//           {genre} - {type === "m" ? "Movies" : "TV Shows"}
//         </div>
//         <div onClick={handleTypeChange} className="genre-type-change">
//           Looking for {type === "m" ? "TV Shows" : "movies"}? Click here
//         </div>
//       </div>

//       {Data.length ? (
//         <div className="results-container">
//           {Data?.map((item) => {
//             var path = "https://image.tmdb.org/t/p/w300" + item?.backdrop_path;
//             return (
//               <>
//                 <Link
//                   key={item.id}
//                   href={`/${item.id}${type}`}
//                   className="card"
//                   style={{
//                     background: `url(${path})`,
//                   }}
//                 >
//                   <div className="card-info">
//                     <div className="card-title">
//                       {item.original_title || item.name}
//                     </div>
//                     <div className="card-rating">
//                       {item.vote_average} &#9733;
//                     </div>
//                   </div>
//                 </Link>
//               </>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="no-results-container">
//           <div className="no-results">
//             There are no {type === "m" ? "Movies" : "TV Shows"} available,
//             related to this genre as of now. Please go through the genre list
//             and select a different genre.
//           </div>
//           <Link href="/categories">Categories</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Genre;
