import React from 'react';
import './styles/styles.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from 'containers/ErrorBoundary';
import AppRoutes from './routes';

const App = () => (
  <ErrorBoundary>
    <Router>
      <AppRoutes />
    </Router>
  </ErrorBoundary>
);

export default App;
