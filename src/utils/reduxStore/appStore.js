import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesResucer from "./moviesSlice";
import stateReducer from "./stateSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesResucer,
    state: stateReducer,
  },
});

export default appStore;
