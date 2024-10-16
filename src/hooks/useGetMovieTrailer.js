import { useEffect } from "react";
import { GET_OPTIONS } from "../utils/constants";

const useGetMovieTrailer = ({ movieId, setVideoLink }) => {
  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      GET_OPTIONS
    );

    const videosDataJson = await data.json();
    const videosList = videosDataJson?.results;
    if (!videosList) return null;
    const traiilerList = videosList.filter((e) => {
      return e.type === "Trailer";
    });

    if (traiilerList && traiilerList.length === 0) return null;
    console.log(traiilerList[0]?.key);

    setVideoLink(traiilerList[0]?.key);
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default useGetMovieTrailer;
