import React from 'react';
import cx from 'classnames';
import { genres, sortOptions } from '../../mocks/data';
import ArrowDown from '../../assets/icons/arrowDown.svg';
import './GenreList.css';
import useQuery from '../../hooks/useQuery';

const defaultTabClassName =
  'default-tab border-bottom';

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
    <nav className={cx('flex-container')}>
      {genres.map((genreName: string) => (
        <span
          key={genreName}
          className={cx(defaultTabClassName, {
            'primary-border primary-text': selectedGenre === genreName,
            'white-text': selectedGenre !== genreName,
          })}
          onClick={onFilterClick}
        >
                    {genreName}
                </span>
      ))}
      <span className="space-elem border-bottom"></span>
      <span className="sort-label border-bottom">
                Sort by
            </span>
      <div className="select-box border-bottom white-text">
        <select
          className='white-text'
          onChange={onSortChange}
          defaultValue={sortByValue || 'genres'}
        >
          {sortOptions.map((sortOption, index) => (
            <option key={index} value={sortOption.value}>
              {sortOption.name}
            </option>
          ))}
        </select>
        <div className="select-arrow-custom">
          <ArrowDown className="arrow-down" />
        </div>
      </div>
    </nav>
  );
};

export default GenreList;
