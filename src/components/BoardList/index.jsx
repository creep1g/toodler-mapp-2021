import React from 'react';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';

const BoardList = function ({ boards, selectedBoards, onLongPress }) {
  return (
    <View style={{ flex: 1 }}>
	<FlatList
        numColumns={1}
        data={boards}
        renderItem={({ item: { id, name, thumbnailPhoto } }) =>
          (
            <ImageThumbnail 
			  onLongPress={onLongPress}  
			  isSelected={selectedBoards.indexOf(name) !== -1}
			  file={thumbnailPhoto} 
			  name={name}  />
          ) 
		  }
        keyExtractor={board => board.id }
      />
    </View>
  );
};

export default BoardList;
