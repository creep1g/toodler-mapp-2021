import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import ModifyBoardInputHandler from '../ModifyBoardInputHandler';

const ModifyBoardModal = function ({
  isOpen, closeModal, modifyBoard, board,
}) {
  return (
    <Modal
      style={styles.modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >

      <ModifyBoardInputHandler
        style={styles.modal}
        closeModal={closeModal}
        modifyBoard={modifyBoard}
        board={board}
      />
    </Modal>
  );
};

ModifyBoardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modifyBoard: PropTypes.func.isRequired,
};

export default ModifyBoardModal;
