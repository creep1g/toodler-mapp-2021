import React from 'react';
import {
  View, Text, TouchableHighlight, Image,
} from 'react-native';
import logo from '../../resources/main_logo.jpg';
import styles from './styles';

const Main = function ({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.paragraph}> Toddler!! </Text>
      <TouchableHighlight
        style={styles.button}
		  onPress={() => { navigate('Board'); }}
      >
        <Text style={styles.buttonText}>To boards</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Main;
