import React from "react";
import "./rowdata.css";

const RowData = ({ movieData, title, playTrailer }) => {
  return movieData.map((item) => {
    return (
      <div
        className={`${
          title === "Top Rated" ? "movie-poster" : "movie-poster-size"
        }`}
        key={item.id}
        onClick={() => playTrailer(item)}
      >
        <img
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt="movie-poster"
        />
      </div>
    );
  });
};

export default RowData;
