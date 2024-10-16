import { useDispatch } from "react-redux";
import { GET_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/reduxStore/moviesSlice";
import { useEffect } from "react";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      GET_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useGetUpcomingMovies;
