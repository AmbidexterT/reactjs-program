import React from 'react';
import ErrorBoundaryView from '../components/ErrorBoundaryView'; // Update the path accordingly

const NotFoundPage = () => {
  return <ErrorBoundaryView title="Page not found" />;
};

export default NotFoundPage;
