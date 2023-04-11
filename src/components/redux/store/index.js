import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
