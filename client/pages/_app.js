import React from 'react';
import { useRouter } from 'next/router';
import MoviesPage from './Movies';
import { Provider } from 'react-redux';
import store from '@/store/store';
import styles from '../app/App.module.css';
import '@/app/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={ store } >
      <div className={styles.App}><MoviesPage /></div>
    </Provider>
  );
}
