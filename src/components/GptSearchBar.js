import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageDetails";
import model from "../utils/googleGenAI";
import {
  addMovieSuggestions,
  addMovieSuggestionsDetails,
} from "../utils/reduxStore/movieSuggestionSlice";
import { GET_OPTIONS } from "../utils/constants";
import MovieCart from "./MovieCart";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.state?.language);
  const suggestedMovies = useSelector((store) => store.suggestedMovies.movies);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const suggestedMoviesDetails = useSelector(
    (store) => store.suggestedMovies.moviesDetails
  );

  // const callGPT = async (text) => {
  //   const chatCompletion = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: text }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(chatCompletion);

  //   return chatCompletion;
  // };

  const callGoogleGenAI = async (searchText) => {
    const prompt =
      "I am trying to get some movie recommandation can you help me find three " +
      searchText +
      " return the list only with movie name no numbering";

    const result = await model.generateContent([prompt]);
    const data = result.response.text();

    const arr = data.split("\n");
    const movieList = arr.map((name) => {
      const movie = name.substring(1).trim();
      return movie;
    });
    // console.log(movieList);
    return movieList;
  };

  const handleSearch = async () => {
    // console.log(searchText.current.value);
    setShowLoading(true);
    const movieList = await callGoogleGenAI(searchText.current.value);
    dispatch(addMovieSuggestions(movieList));
  };

  const searchMovieDetails = async (suggestedMovies) => {
    const promiseArray = suggestedMovies.map(async (movie) => {
      const movieDetails = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        GET_OPTIONS
      );
      const movieDetailsJson = await movieDetails.json();
      return movieDetailsJson;
    });

    const response = await Promise.all(promiseArray);
    const listArray = response.map((data) => {
      return data?.results;
    });

    dispatch(addMovieSuggestionsDetails(listArray));
    setShowLoading(false);
  };

  useEffect(() => {
    if (suggestedMovies) {
      searchMovieDetails(suggestedMovies);
    }
  }, suggestedMovies);

  return (
    <>
      <div className="pt-[10%] flex justify-center flex-col">
        <div className="flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
          >
            <input
              ref={searchText}
              type="text"
              placeholder={lang[language]?.searchPlaceholder}
              className="col-span-9 px-3 py-3 m-3 rounded-lg"
            ></input>
            <button
              className="bg-red-800 col-span-3 px-2 py-2 m-3 rounded-lg"
              onClick={handleSearch}
            >
              {lang[language]?.search}
            </button>
          </form>
        </div>
        {showLoading && (
          <div className="flex justify-center bg-black">
            <h1 className="font-bold text-white text-3xl">Loading</h1>
          </div>
        )}
        <div className="flex overflow-x-scroll scrollbar-hide ml-3 mt-32">
          {suggestedMoviesDetails &&
            suggestedMoviesDetails.map((movieList) => {
              // return <MovieList key={index} title={""} movies={movieList} />;
              return movieList.map((movie) => {
                return (
                  <div key={movie.id}>
                    <div className="flex">
                      <MovieCart
                        poster={movie?.poster_path}
                        backdrop={movie?.backdrop_path}
                      />
                    </div>
                  </div>
                );
              });
            })}
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
