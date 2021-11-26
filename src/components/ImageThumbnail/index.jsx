import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
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
          ?       <AntDesign name="checkcircleo" style={styles.checkmark} />
          : <></>
      }
      <View style={[styles.view, { opacity: isSelected ? 0.5 : 1 }]}>
        <Text style={styles.text}>
          {' '}
          { name }
          {' '}
        </Text>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: file }}
        />
      </View>
    </TouchableOpacity>
  );
};

ImageThumbnail.propTypes = {
  file: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageThumbnail;
