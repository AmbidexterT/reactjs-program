import React from 'react';
import { useRouter } from 'next/router';
import MoviesPage from './Movies';
import { Provider } from 'react-redux';
import store from '@/store/store';
import styles from '../app/App.module.css';
import '@/app/globals.css'

const Home = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/search');
  }, []);

  return (
    <Provider store={ store } >
      <div className={styles.App}><MoviesPage /></div>
    </Provider>
  );
};

export default Home;
