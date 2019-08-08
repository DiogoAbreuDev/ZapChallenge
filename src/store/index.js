import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import favoritesReducer from "../reducers/favoritesReducer";

const reducer = combineReducers ({ favorites: favoritesReducer });

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store;
