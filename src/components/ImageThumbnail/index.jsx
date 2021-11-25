import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const ImageThumbnail = function ({
  file, name, id, onLongPress, isSelected, onSelect,
}) {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(id)}
      onPress={() => onSelect(id)}
    >
      {
		  	isSelected
		  		?		 		<AntDesign name="checkcircleo" />
		  	  : <></>
		  }
      <View style={{ opacity: isSelected ? 0.5 : 1 }}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: file }}
        />
        <Text style={styles.text}>
          {' '}
          { name }
          {' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageThumbnail;
