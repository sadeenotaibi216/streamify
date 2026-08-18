import { createSlice } from "@reduxjs/toolkit";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

const initialState: Movie[] = [];

const myListSlice = createSlice({
  name: "myList",
  initialState,

  reducers: {
    addToMyList: (state, action) => {
      const movieExists = state.some(
        (movie) => movie.id === action.payload.id
      );


      if (!movieExists) {
        state.push(action.payload);
      }
    },

    removeFromMyList: (state, action) => {
      return state.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const {
  addToMyList,
  removeFromMyList,
} = myListSlice.actions;

export default myListSlice.reducer;