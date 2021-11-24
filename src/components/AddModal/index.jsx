import React from 'react';
import {Entypo} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from '../Modal';
import styles from './styles';
import BoardInput from '../BoardInputHandler';

const AddModal = ({
    isOpen,
    closeModal,
    addBoard,

}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <BoardInput />
        <TouchableOpacity
            onPress={() => addBoard()}>
                
            </TouchableOpacity>

    </Modal>
);


export default AddModal;