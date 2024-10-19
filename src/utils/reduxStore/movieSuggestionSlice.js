import { createSlice } from "@reduxjs/toolkit";

const movieSuggestionSlice = createSlice({
  name: "movieSuggestions",
  initialState: {
    movies: null,
    moviesDetails: null,
  },
  reducers: {
    addMovieSuggestions: (state, action) => {
      state.movies = action.payload;
    },
    addMovieSuggestionsDetails: (state, action) => {
      state.moviesDetails = action.payload;
    },
  },
});

export const { addMovieSuggestions, addMovieSuggestionsDetails } =
  movieSuggestionSlice.actions;
export default movieSuggestionSlice.reducer;
