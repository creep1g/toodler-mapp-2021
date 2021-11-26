import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import BoardInputHandler from '../BoardInputHandler';

const AddBoardModal = function ({
  isOpen, closeModal, addBoard,
}) {
  return (
    <Modal
	  style={styles.modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >

      <BoardInputHandler
	  	style={styles.modal}
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
