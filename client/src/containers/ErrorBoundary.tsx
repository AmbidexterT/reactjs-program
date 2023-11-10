import React from 'react';
import ErrorBoundaryView from 'components/ErrorBoundaryView';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  redirectToHome = () => (window.location.href = '/');

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  render () {
    if (this.state.hasError) return <ErrorBoundaryView onRefresh={this.redirectToHome} />;

    return this.props.children;
  }
}

export default ErrorBoundary;
