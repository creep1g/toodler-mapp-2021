import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const ImageThumbnail = function ({ file, name, id, onLongPress, isSelected}) {
  return (
	  <TouchableOpacity
		onLongPress={() => onLongPress(name)} >
		  {
		  	isSelected
		  		?
		 		<AntDesign name="checkcircleo" />
				:
		    	<></>
		  }
		  <View style={{opacity: isSelected ? .5 : 1}}>
			<Image
			style={styles.image}
			resizeMode="cover"
			source={{ uri: file }}
			/>
			<Text style={styles.text}> { name } </Text>
	</View>
	</TouchableOpacity>
  );
};

export default ImageThumbnail;
