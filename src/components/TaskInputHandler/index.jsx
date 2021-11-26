import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/inputHandlers';

const TaskInputHandler = function ({ addTask, closeModal }) {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
  });

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={false}
    >

      <Text style={styles.inputText}>Name</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder="Enter task name"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <Text style={styles.inputText}>Description</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder="Enter description"
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addTask(inputs)}
        >
          <Text style={styles.text}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={closeModal}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

TaskInputHandler.propTypes = {
  addTask: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default TaskInputHandler;
