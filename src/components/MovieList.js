import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="font-mono font-bold text-white p-3 text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide ml-3">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCart
              key={movie.id}
              poster={movie?.poster_path}
              backdrop={movie?.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
