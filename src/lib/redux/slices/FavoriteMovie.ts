import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../../types";

export const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    movies: <Movie[]>[],
    favoriteColor: "white",
  },
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeItem: (state) => {
      state.movies.pop();
    },
    setFavoriteColor: (state, action) => {
      state.favoriteColor = action.payload;
    },
  },
});

export const { addMovie, removeItem, setFavoriteColor } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
