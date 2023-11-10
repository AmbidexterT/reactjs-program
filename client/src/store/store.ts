import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';

import { DispatchType, FilmState } from '../types/film.model';
import reducer from './reducer';

export const store: Store<FilmState, AnyAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));
