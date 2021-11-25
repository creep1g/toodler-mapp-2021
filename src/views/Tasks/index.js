import React, { useState } from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import styles from './styles'

const Tasks = ( { route, navigation: { navigate } } ) => {

	const { ListId, BoardId } = route.params;


	const [tasks, setTasks] = useState(
		data.tasks.filter( (tasks) => tasks.listId === ListId )
	);

	console.log({tasks});

	const [ selectedTasks, setSelectedTasks ] = useState([]);

	const [ finishedTasks ] = useState( 
		tasks.filter( (tasks) => tasks.isFinished === true)		
	);

	const onTaskLongPress = id => { 
		if ( selectedTasks.indexOf(id) !== -1) {
			setSelectedTasks(selectedTasks.filter(task => task !== id));
		}
		else {
			setSelectedTasks([...selectedTasks, id])		
		}
	}

	return (
		<View style={[{ flex: 1 }]}>
			<Toolbar hasSelected={selectedTasks.length > 0} name={'task'} />
			<View style={styles.container}>
				<TaskList
					tasks={tasks}
					onTaskLongPress={id => onTaskLongpress(id)}
				/>
			</View>
		</View>
	)
}

export default Tasks;
