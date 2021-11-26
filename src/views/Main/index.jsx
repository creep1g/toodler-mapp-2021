import React from 'react';
import {
  View, Text, TouchableHighlight, Image,
} from 'react-native';
import logo from '../../resources/main_logo.jpg';
import styles from './styles';
import DataDog from '../../components/Services';

const Main = function ({ navigation: { navigate } }) {
  const Data = new DataDog();
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.paragraph}> Toddler!! </Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => { navigate('Board', Data); }}
      >
        <Text style={styles.buttonText}>To boards</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Main;
