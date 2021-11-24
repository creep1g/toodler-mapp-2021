import React from 'react';
import { View, FlatList, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const SubList = function ({ lists, BoardId, onLongPress, selectedLists, onSelect  }) {

	return (
		<View>
			<FlatList
				numColumns={2}
				data={lists}
				renderItem={({ item: { id, name, color, boardId } }) => (
				<TouchableHighlight>
					<View> 
						<Text>{name}</Text>
					</View>
				</TouchableHighlight>
				)}
				keyExtractor={list => list.id}
			/>
		</View>
	);
};

export default SubList;
