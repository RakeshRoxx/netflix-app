import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageDetails";
import model from "../utils/googleGenAI";
import { addMovieSuggestions } from "../utils/reduxStore/movieSuggestionSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.state?.language);
  const suggestedMovies = useSelector((store) => store.suggestedMovies.movies);
  const searchText = useRef(null);
  const dispatch = useDispatch();

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
    const movieList = await callGoogleGenAI(searchText.current.value);
    dispatch(addMovieSuggestions(movieList));
  };

  console.log("kajdla", suggestedMovies);

  useEffect(() => {
    console.log("use", suggestedMovies);
  }, suggestedMovies);

  return (
    <div className="pt-[10%] flex justify-center">
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
  );
};

export default GptSearchBar;
