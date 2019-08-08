import { SET_FAVORITES } from '../actions/SetFavorites';

const initialState = {
  favorites: []
};

const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FAVORITES:
      return {
        favorites: action.data
      };
    default:
      return state;
  }
}

export default favoritesReducer;