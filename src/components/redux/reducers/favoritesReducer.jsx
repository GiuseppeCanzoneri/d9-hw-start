// favoritesReducer.js
const initialState = {
  content: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
