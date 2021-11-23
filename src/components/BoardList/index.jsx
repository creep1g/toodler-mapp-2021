import React from 'react';
import { View, FlatList, TouchableHighlight } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';

const BoardList = function ({ boards }) {
  return (
    <View style={{ flex: 1 }}>
	<FlatList
        numColumns={2}
        data={boards}
        renderItem={({ item: { id, name, thumbnailPhoto } }) =>
          (
            <ImageThumbnail file={thumbnailPhoto} name={name} id={id}  />
          ) 
		  }
        keyExtractor={(board) => board.thumbnailPhoto }
      />
    </View>
  );
};

export default BoardList;
