import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import { MovieMockData } from '../../mocks/data';
import constants, { testingConstants } from 'utils/Constants';
import SearchBar from './SearchBar';

describe('Movie search header component', () => {
  const onClickAddMovie = jest.fn();
  const onSearchSubmit = jest.fn().mockImplementation((e) => e.preventDefault());
  const setSearchValue = jest.fn();
  const wrapper = (
    <BrowserRouter>
      <SearchBar
        onSearchSubmit={onSearchSubmit}
  setSearchValue={setSearchValue}
  defaultSearchValue={MovieMockData.title}
  openAddMovie={onClickAddMovie}
  />
  </BrowserRouter>
);

  it('should render movie search header component', () => {
    const elem = renderer.create(wrapper).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('should call onSubmit function', () => {
    const { getByText, getByTestId } = render(wrapper);
    expect.assertions(3);
    expect(getByText(constants.headerTitle)).toBeInTheDocument();
    fireEvent.change(getByTestId(testingConstants.searchBarInput), { target: { value: MovieMockData.title } });
    expect(getByTestId(testingConstants.searchBarInput)).toHaveValue(MovieMockData.title);
    fireEvent.click(getByTestId(testingConstants.searchSubmitButton));
    expect(onSearchSubmit).toBeCalledTimes(1);
  });
});
