import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
// import styles from './styles';
import BoardInputHandler from '../BoardInputHandler';

const AddBoardModal = function ({
  isOpen, closeModal, addBoard,
}) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <BoardInputHandler
        closeModal={closeModal}
        addBoard={addBoard}
      />
    </Modal>
  );
};

AddBoardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addBoard: PropTypes.func.isRequired,

};

export default AddBoardModal;
