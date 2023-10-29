import React from 'react';
import './styles/styles.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from 'containers/ErrorBoundary';
import AppRoutes from './routes';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundary>
  </Provider>
);

export default App;
