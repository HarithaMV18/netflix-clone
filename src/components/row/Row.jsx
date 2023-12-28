import React, { useEffect, useState } from "react";
import "./row.css";
import data from "../../db/db.js";
import RowData from "../rowdata/RowData";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const playTrailer = (item) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(item?.title || item?.name || item?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((err) => console.log(err.message));
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await data.get(`${fetchURL}`);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, [fetchURL]);
  return (
    <div className="movie-list">
      <h3>{title}</h3>
      <div className="row-data">
        <RowData movieData={movies} title={title} playTrailer={playTrailer} />
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
