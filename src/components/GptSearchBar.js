import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageDetails";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.state?.language);
  const searchText = useRef(null);

  const handleSearch = () => {
    // console.log(searchText.current.value);
  };

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
