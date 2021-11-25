import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

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
    <View>
      <TextInput
        placeholder="Enter board name"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TextInput
        placeholder="Enter board description"
        value={inputs.description}
        onChangeText={(text) => inputHandler('description', text)}
      />
      <TextInput
        placeholder="Enter thumbnail url"
        value={inputs.thumbnailPhoto}
        onChangeText={(text) => inputHandler('thumbnailPhoto', text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => addBoard(inputs)}
        >
          <Text>Add board</Text>
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

export default BoardInputHandler;
