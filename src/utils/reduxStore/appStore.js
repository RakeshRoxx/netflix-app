import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesResucer from "./moviesSlice";
import stateReducer from "./stateSlice";
import movieSuggestedReducer from "./movieSuggestionSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesResucer,
    state: stateReducer,
    suggestedMovies: movieSuggestedReducer,
  },
});

export default appStore;
