import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const ImageThumbnail = function ({ file, name, id}) {
  return (
	  // Haven't figured this one out!
	<TouchableHighlight onPress={() => { navigate('List'); }}>
	  <View style={styles.view}>
			<Image
			style={styles.image}
			resizeMode="cover"
			source={{ uri: file }}
			/>
			<Text style={styles.text}> { name } </Text>
	</View>
	</TouchableHighlight>
  );
};

export default ImageThumbnail;
