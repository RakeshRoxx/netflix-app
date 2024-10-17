import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "state",
  initialState: {
    gptSearch: false,
    language: "english",
  },
  reducers: {
    updateGptSearchState: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { updateGptSearchState, changeLanguage } = stateSlice.actions;
export default stateSlice.reducer;
