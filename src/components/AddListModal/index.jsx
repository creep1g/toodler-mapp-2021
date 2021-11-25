import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
// import styles from './styles';
import ListInputHandler from '../ListInputHandler';

const AddListModal = function ({
  isOpen, closeModal, addList,
}) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ListInputHandler
        closeModal={closeModal}
        addList={addList}
      />
    </Modal>
  );
};

AddListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,

};

export default AddListModal;
