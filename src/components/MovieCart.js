import React from "react";
import { POSTER_BASE_URL_W500 } from "../utils/constants";

const MovieCart = ({ poster, backdrop }) => {
  return (
    <div className="mx-1">
      <img
        className="w-48 max-w-none rounded-md"
        src={POSTER_BASE_URL_W500 + poster}
        alt="posterImg"
      ></img>
    </div>
  );
};

export default MovieCart;
