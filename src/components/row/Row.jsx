import React, { useEffect, useState } from "react";
import "./row.css";
import data from "../../db/db.js";
import RowData from "../rowdata/RowData";
const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
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
        <RowData movieData={movies} title={title} />
      </div>
    </div>
  );
};

export default Row;
