import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import Modal from '../Modal';
// import styles from './styles';
import ListInputHandler from '../ListInputHandler';
import BoardInputHandler from '../BoardInputHandler';

const AddModal = function ({
  isOpen, closeModal, addBoard, addList, addTask, name,
}) {
  const boardHandler = () => {
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <BoardInputHandler
        closeModal={closeModal}
        addBoard={addBoard}
      />
    </Modal>;
  };
  
  if ({ name } === 'board') {
    return (
      boardHandler()
    );
  } if ({ name } === 'list') {
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
  }
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

AddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addBoard: PropTypes.func,
  addList: PropTypes.func,
  addTask: PropTypes.func,
  name: PropTypes.string.isRequired,
};

AddModal.defaultProps = {
  addBoard: () => {},
  addList: () => {},
  addTask: () => {},
};

export default AddModal;
