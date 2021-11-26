import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
// import styles from './styles';
import TaskInputHandler from '../TaskInputHandler';

const AddTaskModal = function ({
  isOpen, closeModal, addTask,
}) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <TaskInputHandler
        closeModal={closeModal}
        addTask={addTask}
      />
    </Modal>
  );
};

AddTaskModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,

};

export default AddTaskModal;
