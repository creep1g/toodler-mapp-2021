import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/inputHandlers';

const ModifyListInputHandler = function ({ modifyList, closeModal, list }) {
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
        placeholder={list.name}
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
      />
      <Text style={styles.inputText}>Color</Text>
      <Picker
        selectedValue={list.color}
        itemStyle={{ backgroundColor: list.color }}
        onValueChange={(value) => inputHandler('color', value)}
      >
        <Picker.Item color={list.color} label={list.color} value={list.color} />
        {
          colors.map((colorr) => (<Picker.Item color={colorr} label={colorr} value={colorr} />))
        }
      </Picker>
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

ModifyListInputHandler.propTypes = {
  modifyList: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};
export default ModifyListInputHandler;
