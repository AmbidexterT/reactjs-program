import { AnyAction } from 'redux';

export enum SortValues {
  RATING = 'vote_average',
  RELEASE_DATE = 'release_date'
}

export enum FilterValues {
  ALL = '',
  DOCUMENTARY = 'DOCUMENTARY',
  COMEDY = 'COMEDY',
  HORROR = 'HORROR',
  CRIME = 'CRIME'
}

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  genres: string[];
  release_date: string;
  runtime: number;
  vote_average?: number;
  overview: string;
};

export type Movies = {
  data: Movie[] | [];
  total: number;
  offset: number;
  limit: number;
};

export interface IFilmBase {
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
  overview: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  budget?: number;
  revenue?: number;
  runtime: number;
}

export interface IFilm extends IFilmBase {
  id: number;
}

export type FilmState = {
  loading: boolean;
  films: Movie[];
  error?: unknown;
  sort: SortValues;
  filter: FilterValues;
};

export type DispatchType = (args: AnyAction) => AnyAction;
