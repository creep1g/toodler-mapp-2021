import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import TaskList from '../TaskList';

const SubList = function ({ lists, onLongPress, selectedLists, onSelect  }) {
	

	return (
		<View>
			<FlatList
				numColumns={2}
				data={lists}
				renderItem={({ item, index} ) => (
				<View style={[styles.list, { backgroundColor: item.color }]}>
					<View name="listName" style={ { flex: 1 } }>
	
						<Text style={styles.name}> { item.name } </Text>
	
						{/* <View name="taskList" styles={{ flex: 1, position: 'absolute', top: 0, left:0, width: 145 }}> */}
							<TaskList ListId={item.id} />
						{/* </View> */}

					</View>
				
				</View>
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

export default SubList;
