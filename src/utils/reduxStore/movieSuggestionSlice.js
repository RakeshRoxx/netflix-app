import { createSlice } from "@reduxjs/toolkit";

const movieSuggestionSlice = createSlice({
  name: "movieSuggestions",
  initialState: {
    movies: null,
  },
  reducers: {
    addMovieSuggestions: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovieSuggestions } = movieSuggestionSlice.actions;
export default movieSuggestionSlice.reducer;
