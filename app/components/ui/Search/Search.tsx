import { useState } from "react";
import Link from "next/link";
import { useLocation } from "next/navigation";
import { BiMoviePlay } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImTv } from "react-icons/im";
// import tmdb from "../tmdb";
import Nav from "./Nav";

function Search() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [SearchItem, setSearchItem] = useState(null);
  const [Toggle, setToggle] = useState("m");
  const [Result, setResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(Toggle);
    const method =
      Toggle === "m"
        ? "searchMovie"
        : Toggle === "t"
        ? "searchTv"
        : "searchPerson";
    const check = Toggle === "p" ? "profile_path" : "backdrop_path";
    tmdb[method]({ query: SearchItem })
      .then((res) => {
        setResult(res.results.filter((a) => a[check] !== null));
      })
      .catch(console.error);
  };

  return (
    <div className="App">
      <ScrollRestoration />
      <Nav loc={currentUrl} />
      <div className="content">
        <form className="search" onSubmit={handleSearch}>
          <input
            value={SearchItem}
            placeholder="Search for a movie..."
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button type="submit" style={{ visibility: "hidden" }}></button>
          <div className="toggle">
            <button data-toggle={Toggle === "m"} onClick={() => setToggle("m")}>
              <BiMoviePlay />
            </button>
            <button data-toggle={Toggle === "t"} onClick={() => setToggle("t")}>
              <ImTv />
            </button>
            <button data-toggle={Toggle === "p"} onClick={() => setToggle("p")}>
              <BsFillPeopleFill />
            </button>
          </div>
        </form>
        <div className="results-container">
          {Result?.map((item) => {
            if (Toggle === "p") {
              var path = "https://image.tmdb.org/t/p/w185" + item?.profile_path;
            } else {
              var path =
                "https://image.tmdb.org/t/p/w300" + item?.backdrop_path;
            }

            return (
              <>
                <Link
                  href={Toggle !== "p" && `/${item.id}` + Toggle}
                  className={Toggle === "p" ? "card people-card" : "card"}
                  style={{
                    background: `url(${path})`,
                  }}
                >
                  <div className="card-info">
                    <div className="card-title">
                      {item.original_title || item.name}
                    </div>
                    {Toggle !== "p" && (
                      <div className="card-rating">
                        {item.vote_average} &#9733;
                      </div>
                    )}
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
