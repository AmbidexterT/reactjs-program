import React, { useState } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';
import Movie from 'types/Movie';

const MoviesPage = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);

  const onSearchIconClick = () => setSelectedMovie(undefined);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {selectedMovie ? (
        <MovieDetailsHeader movie={selectedMovie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchBar />
      )}
      <div className="w-full h-2.5" />
      <Content onSelectedClick={setSelectedMovie} />
    </>
  );
};

export default MoviesPage;
