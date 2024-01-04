import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./slices/FavoriteMovie";

const store = configureStore({
  reducer: {
    favorite: favoritesSlice,
  },
});

export default store;
