import React from 'react';
import Modal from 'containers/Modal';
import Button from 'components/Button/Button';

interface DeleteConfirmationProps {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteConfirmation = ({ isOpen, title, description, onConfirm, onClose }: DeleteConfirmationProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title} close>
    <span className="font-normal text-lg my-6">{description}</span>
    <Button className="flex ml-auto mt-6" title="Confirm" variant="primary" size="medium" onClick={onConfirm} />
  </Modal>
);

export default DeleteConfirmation;
