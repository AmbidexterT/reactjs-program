import React, { HTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLogo from 'components/Logo';
import Button from 'components/Button/Button';

interface SearchHeaderProps extends HTMLAttributes<HTMLDivElement> {
  defaultSearchValue: string;
  openAddMovie: () => void;
}

const SearchBar = ({ defaultSearchValue, openAddMovie, className = '', ...rest }: SearchHeaderProps) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(defaultSearchValue);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    return searchValue ? navigate(`/search/${searchValue}`) : navigate('/search');
  };

  return (
    <header className={`flex-col h-96 bg-header py-5 px-4 md:px-16 text-white bg-cover ${className}`} {...rest}>
      <div className="flex w-full justify-between items-start">
        <AppLogo />
        <Button buttonTitle="+ ADD MOVIE" variant="secondary" size="small" onClick={openAddMovie} />
      </div>
      <div className="flex-col m-2 md:mx-16 md:my-11">
        <label className="flex text-2xl md:text-5xl">FIND YOUR MOVIE</label>
        <form className="flex mt-2 md:mt-9 w-full">
          <input
            className="flex rounded p-1 md:p-4 text-lg w-full bg-gray80 opacity-60 focus:outline-none"
            name="search"
            onInput={(e) => setSearchValue(e.currentTarget.value)}
            placeholder="What do you want to watch?"
            defaultValue={defaultSearchValue}
          />
          <Button
            data-testid={'search-button'}
            className="flex ml-2 uppercase"
            buttonTitle="Search"
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

export default SearchBar;
