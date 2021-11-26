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

const BoardInputHandler = function ({ addBoard, closeModal }) {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    thumbnailPhoto: '',
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
        placeholder="Enter board name"
		placeholderTextColor={'gray'}
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
		style={styles.input}
      />
	  <Text style={styles.inupText}>Description</Text>
      <TextInput
        placeholder="Enter board description"
		placeholderTextColor={'gray'}
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
		style={styles.input}
      />
	  <Text style={styles.inputText}>Image URL</Text>
      <TextInput
		text="steven"
		placeholderTextColor={'gray'}
        placeholder="Enter thumbnail url"
        value={inputs.thumbnailPhoto}
        onChangeText={(text) => inputHandler('thumbnailPhoto', text)}
		style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => addBoard(inputs)}
		  style={ styles.shadow, styles.button  }
        >
          <Text style={ styles.text }>Add board</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={closeModal}
		  style={ styles.shadow, styles.button }
        >
          <Text style={ styles.text }>Cancel</Text>
        </TouchableOpacity>
      </View>

		</KeyboardAvoidingView>
  );
};

export default BoardInputHandler;
