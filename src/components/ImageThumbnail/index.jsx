import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const ImageThumbnail = function ({ file, name, id, onLongPress, isSelected, onSelect}) {
  return (
	  <TouchableOpacity
		onLongPress={() => onLongPress(id)}
		onPress={() => onSelect(id)} >
		  {
		  	isSelected
		  		?
		 		<AntDesign name="checkcircleo" style={styles.checkmark} />
				:
		    	<></>
		  }
		  <View style={[styles.view, {opacity: isSelected ? .5 : 1}]}>
			<Text style={styles.text}> { name } </Text>
			<Image
			style={styles.image}
			resizeMode="cover"
			source={{ uri: file }}
			/>
	</View>
	</TouchableOpacity>
  );
};

export default ImageThumbnail;
