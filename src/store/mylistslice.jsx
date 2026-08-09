import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "myList",
  initialState: [],

  reducers: {
    addToMyList(state, action) {
      const movieExists = state.find((movie) => movie.id === action.payload.id);

      if (!movieExists) {
        state.push(action.payload);
      }
    },
  },
});

export const { addToMyList } = myListSlice.actions;

export default myListSlice.reducer;
