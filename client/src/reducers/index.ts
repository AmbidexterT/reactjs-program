import { combineReducers } from 'redux';
import { moviesReducer } from './movieReducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
