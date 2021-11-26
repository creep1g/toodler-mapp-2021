import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker,
} from 'react-native';
import styles from '../../styles/inputHandlers';

const TaskInputHandler = function ({
  modifyTask, closeModal, task, lists,
}) {
  const [inputs, setInputs] = useState({
    name: task.name,
    description: task.description,
    listId: task.id,
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
        placeholder={task.name}
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <Text style={styles.inputText}>Description</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder={task.description}
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
      />
      <Picker
        selectedValue={task.listId}
        onValueChange={(value) => inputHandler('listId', value)}
      >
        {
        lists.map((list) => (<Picker.Item key={list.id} label={list.name} value={list.id} />))
        }
      </Picker>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => modifyTask(inputs)}
        >
          <Text style={styles.text}>Update Task</Text>
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

export default TaskInputHandler;
