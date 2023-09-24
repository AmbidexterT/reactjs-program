import React from 'react';
import Landing from 'layout/Landing';
import Modal from 'containers/Modal';

interface Props {
  onRefresh: () => void;
}

const ErrorBoundaryView = ({ onRefresh }: Props) => (
  <Landing>
    <Modal title="Something wrong" isOpen={true}>
      <span className="text-primary cursor-pointer text-2xl" onClick={onRefresh}>
        Refresh the page
      </span>
    </Modal>
  </Landing>
);

export default ErrorBoundaryView;
