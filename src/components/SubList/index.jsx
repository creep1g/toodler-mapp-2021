import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SubList = function ({ lists, onLongPress, selectedLists, onSelect  }) {
	

	return (


			<FlatList
				numColumns={2}
				data={lists}
				renderItem={({ item, index} ) => (
				<TouchableOpacity 
					style={[styles.list, { backgroundColor: item.color }]}
					onLongPress={() => onLongPress(item.id)}
					onPress={() => onSelect(item.id)}
				>
					<View name="listName" style={ { flex: 1 } }>
						<Text style={styles.name}> { item.name } </Text>
					</View>
				</TouchableOpacity>
				)}
				keyExtractor={item => item.id}
			/>
	);
};

export default SubList;
