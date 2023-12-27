import React from "react";
import "./rowdata.css";

const RowData = ({ movieData, title }) => {
  return movieData.map((item) => {
    return (
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt="movie-poster"
        />
      </div>
    );
  });
};

export default RowData;
