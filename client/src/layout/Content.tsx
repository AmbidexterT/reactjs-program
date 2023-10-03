import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import GenreList from 'components/GenreList/GenreList';
import { FilmState, Movie } from '../types/film.model';
import { genres } from '../mocks/data';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeFilter, changeSort, getFilms } from '../store/actionCreators';

interface MovieContentProps extends HTMLAttributes<HTMLDivElement> {
  onSelectedClick: (movie?: Movie) => void;
}

const Content = ({ onSelectedClick, className = '', ...restProps }: MovieContentProps) => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const dispatch = useDispatch();

  const films: Movie[] = useSelector(
    (state: FilmState) => state.films,
    shallowEqual
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(getFilms());
  }, []);

  const handleGenreChange = useCallback(
    (id: string) => {
      setSelectedGenre(id);
      dispatch(changeFilter(id));
      // @ts-ignore
      dispatch(getFilms());
    },
    [dispatch]
  );

  const handleSortChange = React.useCallback(
    (id: string) => {
      dispatch(changeSort(id));
      // @ts-ignore
      dispatch(getFilms());
    },
    [dispatch]
  );

  return (
    <div
      className={`flex items-center justify-center bg-content w-full px-16 h-auto text-white ${className}`}
      {...restProps}
    >
      <div className="flex-col">
        <GenreList
          genreNames={genres}
          selectedGenre={selectedGenre}
          onGenreChange={handleGenreChange}
          onSortChange={handleSortChange}
        />
        <div className="py-4">
          <span className="font-bold">{films.length}</span> <span>movies found</span>
        </div>
        <div className="grid gap-4 grid-cols-4 pb-6">
          {films.map((movie, index) => (
            <MovieCard key={index} movie={movie} onClick={() => onSelectedClick(movie)} />
          ))}
        </div>
      </div>
    </div>)
};

export default Content;
