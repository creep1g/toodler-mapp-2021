import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';

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
    <View>
      <TextInput
        placeholder="Enter task name"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TextInput
        placeholder="Enter description"
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => addTask(inputs)}
        >
          <Text>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={closeModal}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default TaskInputHandler;
