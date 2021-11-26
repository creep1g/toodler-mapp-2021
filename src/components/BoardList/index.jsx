import React from 'react';
import { View, FlatList } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';

const BoardList = function ({
  boards, selectedBoards, onLongPress, onSelect,
}) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={2}
        data={boards}
        renderItem={({ item: { id, name, thumbnailPhoto } }) => (
          <ImageThumbnail
            onSelect={onSelect}
            onLongPress={onLongPress}
            isSelected={selectedBoards.indexOf(id) !== -1}
            file={thumbnailPhoto}
            name={name}
            id={id}
          />
        )}
        keyExtractor={(board) => board.id}
      />
    </View>
  );
};

export default BoardList;
