import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import styles from '../../styles/inputHandlers';

const ModifyBoardInputHandler = function ({ modifyBoard, closeModal, board}) {
  const [inputs, setInputs] = useState({
    name: board.name,
    description: board.description,
    thumbnailPhoto: board.thumbnailPhoto,
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
        placeholder={board.name}
        placeholderTextColor="gray"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
        style={styles.input}
      />
      <Text style={styles.inupText}>Description</Text>
      <TextInput
        placeholder={board.description}
        placeholderTextColor="gray"
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
        style={styles.input}
      />
      <Text style={styles.inputText}>Image URL</Text>
      <TextInput
        text="steven"
        placeholderTextColor="gray"
        placeholder={board.thumbnailPhoto}
        value={inputs.thumbnailPhoto}
        onChangeText={(text) => inputHandler('thumbnailPhoto', text)}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => modifyBoard(inputs)}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Update board</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={closeModal}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
};

export default ModifyBoardInputHandler;
