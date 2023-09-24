import React, { HTMLAttributes, useEffect } from 'react';
import { ReactComponent as SearchButton } from 'assets/icons/searchButton.svg';
import Movie from 'types/Movie';

interface MovieDetailsHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onSearchClick: () => void;
  movie: Movie;
}

const MovieDetailsHeader = ({ onSearchClick, movie, className = '', ...rest }: MovieDetailsHeaderProps) => {
  const { imageSource, title, genre, years, description, rating, duration } = movie;
  const durationInHours = `${(duration / 60).toFixed(0)}h ${(duration % 60).toString()}min`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);

  return (
    <header className={`flex-col bg-content py-5 px-16 text-white  ${className}`} {...rest}>
      <div className="flex w-full justify-between items-center">
        <span className="ml-auto">
          <SearchButton className="cursor-pointer" onClick={onSearchClick} />
        </span>
      </div>
      <div className="flex pt-6">
        <div className="w-1/3">
          <img alt={title} src={imageSource} />
        </div>
        <div className="w-2/3 px-8">
          <p className="flex font-light">
            <span className="flex items-center justify-center text-4xl">{title}</span>
            <span
              className="flex ml-8 items-center justify-center p-3 h-14 w-14 rounded-full border-2 border-white
              text-2xl"
            >
              {rating}
            </span>
          </p>
          <p className="text-white text-opacity-50">{genre}</p>
          <p className="py-8 text-primary font-light text-2xl">
            <span className="mr-8">{years}</span>
            <span>{durationInHours}</span>
          </p>
          <p className="text-white text-opacity-50">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default MovieDetailsHeader;
