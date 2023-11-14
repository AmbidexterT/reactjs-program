import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchMovie, fetchMovies } from '@/actions/movieActions';
import useStateSelector from '@/hooks/useStateSelector';
import useQuery from '@/hooks/useQuery';
import SearchBar from '@/components/SearchBar/SearchBar';
import Content from '@/layout/Content';
import MovieDetailsHeader from '@/layout/MovieDetailsHeader/MovieDetailsHeader';
import MovieFormModal from '@/components/Modals/MovieFormModal';
import Footer from '@/layout/Footer';
import { ROUTES } from '../utils/Constants';
import '@/app/globals.css'

const MoviesPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchValue = '' } = router.query;
  const { currentQuery } = useQuery();
  const genreFilter = currentQuery.get('genre');
  const sortByValue = currentQuery.get('sortBy');
  const movieId = currentQuery.get('movie');
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState(searchValue);

  const {
    totalAmount,
    getMoviesLoading,
    data: movies,
    movie,
    getMoviesError,
  } = useStateSelector((state) => state.movies);

  const onSearchIconClick = () => router.push(ROUTES.search);
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);

  const onSearchSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return searchInputValue ? router.push(`${ROUTES.search}/${searchInputValue}`) : router.push(ROUTES.search);
  };

  const onMovieClick = (movieId: string) => {
    router.push({ pathname: router.pathname, query: { movie: movieId } });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMovies(sortByValue, genreFilter, searchValue));
  }, [dispatch, sortByValue, genreFilter, searchValue]);

  useEffect(() => {
    if (movieId) {// @ts-ignore
      dispatch(fetchMovie(movieId));
    }
  }, [dispatch, movieId]);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {movieId && movie ? (
        <MovieDetailsHeader movie={movie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          openAddMovie={onOpenAddMovieForm}// @ts-ignore
          defaultSearchValue={searchValue}
          setSearchValue={setSearchInputValue}
        />
      )}
      <Content
        totalMovies={totalAmount}
        getMoviesLoading={getMoviesLoading}
        getMoviesError={getMoviesError}
        movies={movies}
        onMovieClick={onMovieClick}
      />
      <Footer />
    </>
  );
};

export default MoviesPage;
