import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import ModifyListInputHandler from '../ModifyListInputHandler';

const ModifyListModal = function ({
  isOpen, closeModal, modifyList, list,
}) {
  return (
    <Modal
      style={styles.modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >

      <ModifyListInputHandler
        style={styles.modal}
        closeModal={closeModal}
        modifyList={modifyList}
        list={list}
      />
    </Modal>
  );
};

ModifyListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modifyList: PropTypes.func.isRequired,
  // list: PropTypes.object.isRequired,

};

export default ModifyListModal;
