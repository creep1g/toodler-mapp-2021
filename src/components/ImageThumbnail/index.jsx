import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const ImageThumbnail = function ({ file, name }) {
  return (
    <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: file }}
    />
  );
};

export default ImageThumbnail;
