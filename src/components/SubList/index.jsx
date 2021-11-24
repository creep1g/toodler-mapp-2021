import React from 'react';
import { View, FlatList, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const SubList = function ({ lists, onLongPress, selectedLists, onSelect  }) {
	

	return (
		<View>
			<FlatList
				numColumns={2}
				data={lists}
				renderItem={({ item: { id, name, color } }) => (
					<TouchableHighlight style={[styles.list, { backgroundColor: color }]}>
					<View>
						<Text style={styles.name}> { name } </Text>
					</View>
				</TouchableHighlight>
				)}
				keyExtractor={list => list.id}
			/>
		</View>
	);
};

export default SubList;
