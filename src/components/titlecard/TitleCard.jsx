import React, { useEffect, useState } from "react";
import "./titleCard.css";
import data from "../../db/db";
import categories from "../../db/request";

const TitleCard = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await data.get(categories.top_rated);
        setMovieData(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, []);
  function shortData(overview, size) {
    return overview.length > size ? overview.slice(0, 130) + "..." : overview;
  }
  return (
    <header
      className="title-card"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original${movieData.backdrop_path}"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top bottom",
        backgroundSize: "cover",
      }}
    >
      <div className="title-details">
        <h1>{movieData.title}</h1>
        <div className="btn-options">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{movieData.overview ? shortData(movieData.overview, 130) : " "}</p>
      </div>

      <div className="bottom-blur"></div>
    </header>
  );
};

export default TitleCard;
