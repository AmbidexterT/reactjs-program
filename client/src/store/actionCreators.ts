import {
  IFilm,
  DispatchType,
  IFilmBase,
  FilterValues,
  SortValues,
  FilmState
} from '../types/film.model';
import * as actionTypes from './actionTypes';

export function addFilm (film: IFilmBase) {
  return (dispatch: DispatchType) => {
    dispatch(filmsStarted());

    fetch('http://localhost:4000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(film)
    })
      .then(response => response.json())
      .then(res => {
        dispatch(postFilmSuccess(res));
      })
      .catch(err => {
        dispatch(filmsFailure(err.message));
      });
  };
}

export function removeFilm (film: IFilm) {
  return (dispatch: DispatchType) => {
    dispatch(filmsStarted());

    fetch(`http://localhost:4000/movies/${film.id}`, {
      method: 'DELETE'
    })
      .then(response =>
        response.status === 204 ? 'success' : new Error('something went wrong')
      )
      .then(() => {
        dispatch(deleteFilmSuccess(film));
      })
      .catch(err => {
        dispatch(filmsFailure(err.message));
      });
  };
}

export function editFilm (film: IFilm) {
  return (dispatch: DispatchType) => {
    dispatch(filmsStarted());

    fetch('http://localhost:4000/movies', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(film)
    })
      .then(response => response.json())
      .then(res => {
        dispatch(putFilmSuccess(res));
      })
      .catch(err => {
        dispatch(filmsFailure(err.message));
      });
  };
}

export const getFilms = (search: string) => {
  return (dispatch: DispatchType, getState: () => FilmState) => {
    dispatch(filmsStarted());

    const sort: SortValues = getState().sort;
    const filter: FilterValues = getState().filter;

    const filterParam = filter.length > 0 ? `&filter=${filter}` : '';
    const searchParam =
      search && search.length > 0 ? `&search=${search}&searchBy=title` : '';

    fetch(
      `http://localhost:4000/movies?sortBy=${sort}${filterParam}&sortOrder=desc${searchParam}`
    )
      .then(response => response.json())
      .then(res => {
        dispatch(getFilmsSuccess(res.data));
      })
      .catch(err => {
        dispatch(filmsFailure(err.message));
      });
  };
};

const getFilmsSuccess = (films: IFilm[]) => ({
  type: actionTypes.GET_FILMS,
  films
});

const putFilmSuccess = (film: IFilm) => ({
  type: actionTypes.EDIT_FILM,
  film
});

const postFilmSuccess = (film: IFilm) => ({
  type: actionTypes.ADD_FILM,
  film
});

const deleteFilmSuccess = (film: IFilm) => ({
  type: actionTypes.REMOVE_FILM,
  film
});

const filmsStarted = () => ({
  type: actionTypes.FILMS_STARTED
});

const filmsFailure = (error: Error) => ({
  type: actionTypes.FILMS_FAILURE,
  error
});

export const changeSort = (id: string) => ({
  type: actionTypes.CHANGE_SORT,
  sort: id
});

export const changeFilter = (id: string) => ({
  type: actionTypes.CHANGE_FILTER,
  filter: id === 'All' ? '' : id
});
