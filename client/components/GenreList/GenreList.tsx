import React from 'react';
import cx from 'classnames';
import { genres, sortOptions } from '../../mocks/data';
import ArrowDown from '../../public/assets/icons/arrowDown.svg';
import styles from './GenreList.module.css';
import useQuery from '../../hooks/useQuery';
import '@/app/globals.css'

const defaultTabClassName =
  'text-white p-1 md:p-5 cursor-pointer hover:text-primary focus:outline-none uppercase font-medium border-b-2';

const GenreList = () => {
  const { currentQuery, addQuery } = useQuery();
  const selectedGenre = currentQuery.get('genre');
  const sortByValue = currentQuery.get('sortBy');

  const onSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => addQuery('sortBy', event.target.value);

  const onFilterClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const selectedFilter = event.currentTarget.innerText[0] + event.currentTarget.innerText.substring(1).toLowerCase();
    addQuery('genre', selectedFilter);
  };

  return (
    <nav className={cx('flex flex-row')}>
      {genres.map((genreName: string) => (
        <span
          key={genreName}
          className={cx(defaultTabClassName, {
            'border-primary text-primary': selectedGenre === genreName,
            'text-white': selectedGenre !== genreName,
          })}
          onClick={onFilterClick}
        >
                    {genreName}
                </span>
      ))}
      <span className="cursor-default mx-auto w-full border-b-2" />
      <span className="text-white p-1 md:p-5 uppercase font-normal border-b-2 text-opacity-50 whitespace-nowrap">
        Sort by
      </span>
      <div className="relative">
        <select
          className="appearance-none w-auto bg-transparent text-white p-1 md:p-5 pr-4 border-b-2 font-medium
          focus:outline-none truncate cursor-pointer"
          onChange={onSortChange}
          defaultValue={sortByValue || 'genres'}
        >
          {sortOptions.map((sortOption, index) => (
            <option key={index} value={sortOption.value}>
              {sortOption.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 -right-2 flex items-center px-2 text-gray-700">
          <img src='../../public/assets/icons/arrowDown.svg' className="fill-current h-3 w-3" />
        </div>
      </div>
    </nav>
  );
};

export default GenreList;
