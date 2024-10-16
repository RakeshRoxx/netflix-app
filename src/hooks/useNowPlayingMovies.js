import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/reduxStore/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMovieList = async () => {
    const list = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      GET_OPTIONS
    );
    const json = await list.json();
    // console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getMovieList();
  }, []);
};

export default useNowPlayingMovies;
