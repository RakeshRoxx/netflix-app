import { useEffect } from "react";
import { GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/reduxStore/moviesSlice";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      GET_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json?.results);
    const movies = json?.results;
    dispatch(addPopularMovies(movies));
  };

  useEffect(() => {
    getPopularMoviesList();
  }, []);
};

export default useGetPopularMovies;
