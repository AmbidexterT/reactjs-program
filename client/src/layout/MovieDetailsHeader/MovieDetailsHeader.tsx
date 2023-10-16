import React, { HTMLAttributes, useEffect } from 'react';
import SearchButton from 'assets/icons/searchButton.svg';
import { Movie } from '../../types/film.model';

interface MovieDetailsHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onSearchClick: () => void;
  movie: Movie;
}

const MovieDetailsHeader = ({ onSearchClick, movie, className = '', ...rest }: MovieDetailsHeaderProps) => {
  const { poster_path, title, genres, release_date, overview, vote_average, runtime } = movie;
  const runtimeInHours = `${(runtime / 60).toFixed(0)}h ${(runtime % 60).toString()}min`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);

  return (
    <header className={`flex-col bg-content py-5 px-16 text-white  ${className}`} {...rest}>
      <div className="flex w-full justify-between items-center">
        <span className="ml-auto">
          <SearchButton className="cursor-pointer" onClick={onSearchClick} data-testid={'search-button'}/>
        </span>
      </div>
      <div className="flex pt-6">
        <div className="w-1/3">
          <img alt={title} src={poster_path} />
        </div>
        <div className="w-2/3 px-8">
          <p className="flex font-light">
            <span className="flex items-center justify-center text-4xl">{title}</span>
            <span
              className="flex ml-8 items-center justify-center p-3 h-14 w-14 rounded-full border-2 border-white
              text-2xl"
            >
              {vote_average}
            </span>
          </p>
          <p className="text-white text-opacity-50">{genres}</p>
          <p className="py-8 text-primary font-light text-2xl">
            <span className="mr-8">{release_date}</span>
            <span>{runtimeInHours}</span>
          </p>
          <p className="text-white text-opacity-50">{overview}</p>
        </div>
      </div>
    </header>
  );
};

export default MovieDetailsHeader;
