import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,

  reducers: {
    toggleLanguage(state) {
      if (state.language === "en") {
        state.language = "ar";
      } else {
        state.language = "en";
      }
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
