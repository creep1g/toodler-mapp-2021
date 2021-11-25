import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import Modal from '../Modal';
// import styles from './styles';
import BoardInput from '../BoardInputHandler';

const AddModal = ({
  isOpen, closeModal, enterBoard,
}) => {
  <Modal
    isOpen={isOpen}
    closeModal={closeModal}
  >
    <BoardInput />
    <TouchableOpacity
      onPress={() => enterBoard()}
    >
      <Text>Button</Text>
    </TouchableOpacity>
  </Modal>;
};

AddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  enterBoard: PropTypes.func.isRequired,
};

export default AddModal;
