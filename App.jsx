import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/routes';

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22ff23',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{ /*
  <View style={styles.container}>
  <Text>this is a text</Text>
    <StatusBar style="auto" />
  </View>
*/ }
