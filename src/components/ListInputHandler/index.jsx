import React, { useState } from 'react';
<<<<<<< HEAD
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import styles from './styles';
=======
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from '../../styles/inputHandlers';
>>>>>>> c8550a5 (Input handlers have been updated)

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

  return (

  <KeyboardAvoidingView
	  behavior="padding"
		enabled={false}>
	  <Text style={styles.inputText}>Name</Text>
      <TextInput
		style={styles.input}
		placeholderTextColor={'gray'}
        placeholder="Enter list name"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
	  <Text style={styles.inputText}>Color</Text>
      <TextInput
		style={styles.input}
		placeholderTextColor={'gray'}
        placeholder="Enter color hex"
        value={inputs.color}
        onChangeText={(text) => inputHandler('color', text)}
      />
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

export default ListInputHandler;
