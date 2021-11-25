import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

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
    <View>
      <TextInput
        placeholder="Enter list name"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <TextInput
        placeholder="Enter color hex"
        value={inputs.color}
        onChangeText={(text) => inputHandler('color', text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => addList(inputs)}
        >
          <Text>Add List</Text>
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

export default ListInputHandler;
