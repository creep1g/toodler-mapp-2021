import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import data from '../../resources/data.json';

const TaskList = ( { ListId, listKey } ) => {

	const [ tasks, setTasks ] = useState(
		data.tasks.filter ( (tasks) => tasks.listId === ListId )
	);

	return (
		<View>
			<FlatList
				numColumns={1}
				data={tasks}
				renderItem={({ item: {id, name, isFinished } }) =>
					<View>
						<Text>{ name }</Text>
						<Text>{ isFinished }</Text>
					</View>
				}

			keyExtractor={tasks => tasks.id}
			/>
		</View>
	)
}

export default TaskList;
