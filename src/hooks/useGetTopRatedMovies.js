import { useEffect } from "react";
import { GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedmovies } from "../utils/reduxStore/moviesSlice";

const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      GET_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json?.results);
    const movies = json?.results;
    dispatch(addTopRatedmovies(movies));
  };

  useEffect(() => {
    getTopRatedMoviesList();
  }, []);
};

export default useGetTopRatedMovies;
