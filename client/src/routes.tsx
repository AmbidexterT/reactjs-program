import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ErrorBoundaryView from 'components/ErrorBoundaryView';
import MoviesPage from 'pages/Movies';
import { ROUTES } from './utils/Constants';

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<Navigate to={ROUTES.search} />}
    />
    <Route
      path={`${ROUTES.search}/:searchValue?`}
      element={<MoviesPage />}
    />
    <Route
      path="/404"
      element={<ErrorBoundaryView title="Page not found" />}
    />
    <Route
      path="*"
      element={<Navigate to="/404" />}
    />
  </Routes>
);

export default AppRoutes;
