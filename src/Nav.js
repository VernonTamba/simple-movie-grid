import React from "react";
import "./Nav.css";
import movieRequest from "./MovieRequest";

const Nav = ({ currentUrl, setCurrentUrl }) => {
  return (
    <div className="nav">
      <button
        onClick={() => setCurrentUrl(movieRequest.fetchNowPlaying)}
        className={`${
          currentUrl === movieRequest.fetchNowPlaying && "active"
        } nav__button`}
      >
        Now Playing
      </button>
      <button
        onClick={() => setCurrentUrl(movieRequest.fetchTrending)}
        className={`${
          currentUrl === movieRequest.fetchTrending && "active"
        } nav__button`}
      >
        Trending
      </button>
      <button
        onClick={() => setCurrentUrl(movieRequest.fetchTopRated)}
        className={`${
          currentUrl === movieRequest.fetchTopRated && "active"
        } nav__button`}
      >
        Top Rated
      </button>
      <button
        onClick={() => setCurrentUrl(movieRequest.fetchPopular)}
        className={`${
          currentUrl === movieRequest.fetchPopular && "active"
        } nav__button`}
      >
        Popular
      </button>
      {/* <button
        onClick={() => setCurrentUrl(movieRequest.fetchLatest)}
        className="nav__button"
      >
        Latest
      </button> */}
      <button
        onClick={() => setCurrentUrl(movieRequest.fetchUpcoming)}
        className={`${
          currentUrl === movieRequest.fetchUpcoming && "active"
        } nav__button`}
      >
        Upcoming
      </button>
    </div>
  );
};

export default Nav;
