import React from 'react';
import {Entypo} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from '../Modal';
import styles from './styles';

const AddModal = ({ isOpen, closeModal}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        
    </Modal>
);

export default AddModal;