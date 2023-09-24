import React from 'react';
import Modal from 'containers/Modal';
import MovieForm from 'components/MovieForm';
import Movie from 'types/Movie';

interface MovieModalProps {
  movie?: Movie;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MovieFormModal = ({ movie, isOpen, onClose, title }: MovieModalProps) => {
  const onSubmit = () => {
    if (movie) return alert('TODO: I will edit form');
    return alert('TODO: I will submit form');
  };

  const onReset = () => {
    alert('TODO: I will reset form');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} close>
      <MovieForm movie={movie} onSubmit={onSubmit} onReset={onReset} />
    </Modal>
  );
};

export default MovieFormModal;
