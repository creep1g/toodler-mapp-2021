import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import styles from '../../styles/inputHandlers';

const ListInputHandler = function ({ modifyList, closeModal, list }) {
  const [inputs, setInputs] = useState({
    name: list.name,
    color: list.color,
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
        placeholder={list.name}
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <Text style={styles.inputText}>Color</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="gray"
        placeholder={list.color}
        value={inputs.color}
        onChangeText={(text) => inputHandler('color', text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => modifyList(inputs)}
          style={styles.button}
        >
          <Text style={styles.text}>Update list</Text>
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

export default ListInputHandler;
