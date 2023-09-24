import React, { HTMLAttributes, useState } from 'react';
import Button from 'components/Button/Button';
import MovieFormModal from 'components/Modals/MovieFormModal';

const SearchHeader = ({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const [searchValue, setSearchValue] = useState('');
  const [isMovieFormModalOpen, setIsMovieFormModalOpen] = useState(false);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchValue) alert(`Looking for: ${searchValue}`);
  };

  const openAddMovie = () => setIsMovieFormModalOpen(true);
  const closeAddMovie = () => setIsMovieFormModalOpen(false);

  return (
    <header className={`flex-col h-96 bg-header py-5 px-16 text-white bg-cover ${className}`} {...rest}>
      <MovieFormModal isOpen={isMovieFormModalOpen} onClose={closeAddMovie} title="Add movie" />
      <div className="flex w-full justify-between items-start">
        <Button title="+ ADD MOVIE" variant="secondary" size="small" onClick={openAddMovie} />
      </div>
      <div className="flex-col mx-16 my-11">
        <label className="flex text-5xl">FIND YOUR MOVIE</label>
        <form className="flex mt-9">
          <input
            className="flex rounded p-4 text-lg w-full bg-gray80 opacity-60 focus:outline-none"
            name="search"
            onInput={(e) => setSearchValue(e.currentTarget.value)}
            placeholder="What do you want to watch?"
          />
          <Button
            className="flex ml-2 uppercase"
            title="Search"
            variant="primary"
            type="submit"
            size="large"
            onClick={onSubmit}
          />
        </form>
      </div>
    </header>
  );
};

export default SearchHeader;
