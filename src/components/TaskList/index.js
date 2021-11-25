import React, { useState } from 'react';
import { View, FlatList, Text, CheckBox } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const TaskList = ( {tasks, onLongPress} ) => {

	return (
		<View>
			<FlatList
				numColumns={1}
				data={tasks}
				renderItem={({ item }) =>
					<View style={styles.card}>
						<Text style={styles.heading}>{ item.name }</Text>
						<Text style={styles.description}>{ item.description }</Text>
					</View>
				}

			keyExtractor={item => item.id}
			/>
		</View>
	)
}

export default TaskList;
