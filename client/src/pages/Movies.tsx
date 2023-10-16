import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovie, fetchMovies } from 'actions/movieActions';
import useStateSelector from 'hooks/useStateSelector';
import useQuery from 'hooks/useQuery';
import SearchBar from 'components/SearchBar/SearchBar';
import Content from 'layout/Content';
import MovieDetailsHeader from 'layout/MovieDetailsHeader/MovieDetailsHeader';
import MovieFormModal from 'components/Modals/MovieFormModal';

interface MoviePageParamsProps {
  searchValue?: string;
}

const MoviesPage = () => {
  const dispatch = useDispatch();
  const {
    totalAmount,
    getMoviesLoading,
    data: movies,
    movie,
    getMoviesError,
  } = useStateSelector((state) => state.movies);
  // @ts-ignore
  const { searchValue = '' } = useParams<MoviePageParamsProps>();
  const { currentQuery } = useQuery();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const genreFilter = currentQuery.get('genre');
  const sortByValue = currentQuery.get('sortBy');
  const movieId = currentQuery.get('movie');
  const [isMovieFormOpen, setIsMovieFormOpen] = useState(false);

  const onSearchIconClick = () => navigate('/search');
  const onOpenAddMovieForm = () => setIsMovieFormOpen(true);
  const onCloseAddMovieForm = () => setIsMovieFormOpen(false);
  const onMovieClick = (movieId: string) => {
    navigate({ pathname, search: `?movie=${movieId}` });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMovies(sortByValue, genreFilter, searchValue));
  }, [dispatch, sortByValue, genreFilter, searchValue]);

  useEffect(() => {
    if (movieId) { // @ts-ignore
      dispatch(fetchMovie(movieId));
    }
  }, [dispatch, movieId]);

  return (
    <>
      <MovieFormModal isOpen={isMovieFormOpen} onClose={onCloseAddMovieForm} title="Add movie" />
      {movieId && movie ? (
        <MovieDetailsHeader movie={movie} onSearchClick={onSearchIconClick} />
      ) : (
        <SearchBar openAddMovie={onOpenAddMovieForm} defaultSearchValue={searchValue} />
      )}
      <Content
        totalMovies={totalAmount}
        getMoviesLoading={getMoviesLoading}
        getMoviesError={getMoviesError}
        movies={movies}
        onMovieClick={onMovieClick}
      />
    </>
  );
};

export default MoviesPage;
