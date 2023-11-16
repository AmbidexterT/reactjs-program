import React from 'react';
import MoviesPage from '../Movies';
import store from "@/store/store";
import { Provider } from 'react-redux';
import '@/app/globals.css'

const SearchPage = () => {
  return (<Provider store={ store }>
    <MoviesPage/>
  </Provider>);
};

export default SearchPage;
