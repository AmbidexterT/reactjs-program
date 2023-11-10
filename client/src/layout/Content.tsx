import React, { HTMLAttributes, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import GenreList from 'components/GenreList/GenreList';
import Movie from 'types/Movie';
import { fakeMovieData, genres } from '../mocks/data';

interface MovieContentProps extends HTMLAttributes<HTMLDivElement> {
  onSelectedClick: (movie?: Movie) => void;
}

const Content = ({ onSelectedClick, className = '', ...restProps }: MovieContentProps) => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleGenreSelect = (genreName: string) => {
    setSelectedGenre(genreName);
    console.log('Selected genre:', genreName);
  };
  return (
    <div
      className={`flex items-center justify-center bg-content w-full px-16 h-auto text-white ${className}`}
      {...restProps}
    >
      <div className="flex-col">
        <GenreList
          genreNames={genres}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
        <div className="py-4">
          <span className="font-bold">{fakeMovieData.length}</span> <span>movies found</span>
        </div>
        <div className="grid gap-4 grid-cols-4 pb-6">
          {fakeMovieData.map((movie, index) => (
            <MovieCard key={index} movie={movie} onClick={() => onSelectedClick(movie)} />
          ))}
        </div>
      </div>
    </div>)
};

export default Content;
