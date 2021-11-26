import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import ModifyTaskInputHandler from '../ModifyTaskInputHandler';

const ModifyTaskModal = function ({
  isOpen, closeModal, modifyTask, task, lists,
}) {
  return (
    <Modal
      style={styles.modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <ModifyTaskInputHandler
        style={styles.modal}
        closeModal={closeModal}
        modifyTask={modifyTask}
        task={task}
        lists={lists}
      />
    </Modal>
  );
};

ModifyTaskModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modifyTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ModifyTaskModal;
