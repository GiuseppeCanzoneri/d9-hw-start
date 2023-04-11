import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Define action types
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const SEARCH_RESULTS = "SEARCH_RESULTS";

// Define action creators
export const addToFavorite = payload => {
  return { type: ADD_TO_FAVORITE, payload };
};

export const removeFromFavorite = payload => {
  return { type: REMOVE_FROM_FAVORITE, payload };
};

export const searchResults = payload => {
  return { type: SEARCH_RESULTS, payload };
};

// Define async action creator using Redux Thunk
export const fetchSearchResults = searchTerm => {
  return async dispatch => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${searchTerm}`);
      const data = await response.json();
      dispatch(searchResults(data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Define the initial state of the application
const initialState = {
  favorites: [],
  searchResults: [],
};

// Define the reducer function for each action type
const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITE:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const searchResultsReducer = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
};

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  favorites: favoritesReducer,
  searchResults: searchResultsReducer,
});

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
