import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ImageThumbnail from '../ImageThumbnail';

const SubList = function ({ lists, BoardId }) {
	return (
		<View>
			<FlatList
				numColumns={2}
				data={lists}
				renderItem={({ item: { id, name, color } }) => 
						(
							<View>
							<Text> {BoardId} </Text>
							<Text>{name}</Text>
							</View>
						)
				}
			/>
		</View>
	)
};

export default SubList;
