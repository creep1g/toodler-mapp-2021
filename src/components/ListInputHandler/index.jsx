import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/inputHandlers';

const ListInputHandler = function ({ addList, closeModal }) {
  const [inputs, setInputs] = useState({
    name: '',
    color: '',
  });

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const colors = ['#5CD859', '#24A6D9', '#595BD9', '#8022D9', '#D159D8', '#D85963', '#D88559'];

  return (

    <KeyboardAvoidingView
      behavior="padding"
      enabled={false}
    >
      <Text style={styles.inputText}>Name</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder="Enter list name"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <Text style={styles.inputText}>Color</Text>
      <Picker
        onValueChange={(value) => inputHandler('color', value)}
      >
        {
          colors.map((colorr) => (<Picker.Item color={colorr} label={colorr} value={colorr} />))
        }
      </Picker>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => addList(inputs)}
          style={styles.button}
        >
          <Text style={styles.text}>Add List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={closeModal}
          style={styles.button}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

ListInputHandler.propTypes = {
  addList: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ListInputHandler;
