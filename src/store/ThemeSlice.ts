import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
  color: "red",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleTheme(state) {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;