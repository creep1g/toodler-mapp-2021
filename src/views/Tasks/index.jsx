import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import styles from './styles';

const Tasks = ( { route, navigation: { navigate } } ) => {

	// Fetch list id from route parameters
	const { ListId } = route.params;
	let { data } = route.params;

	// Filter out irrelevant tasks from out data stream
	const [tasks, setTasks] = useState(data.getTasks(ListId));

	// Selected tasks datastructure initialized
	const [ selectedTasks, setSelectedTasks ] = useState([]);
	
	// Finished tasks datastructure initialized
	const [ finishedTasks, setFinishedTasks ] = useState(data.getFinishedTasks(ListId));
	// When tasks are marked finished they will be added to finisheTasks

	const addFinished = id => {
		if ( finishedTasks.indexOf(id) !== -1 ) {
			setFinishedTasks(finishedTasks.filter(task => task !== id));
		}
		else{
			setFinishedTasks([...finishedTasks, id])
		}
		data.markFinished(id);
	};

	const onTaskLongPress = id => {
		if (selectedTasks.indexOf(id) !== -1) {
			setSelectedTasks(selectedTasks.filter(task => task !== id));
		}
		else {
			setSelectedTasks([...selectedTasks, id])		
		}
	}

	const removeSelectedTasks = () => {
		setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
		selectedTasks.forEach (
			function(taskId){
				data.deleteTask(taskId);
			}
		);
		setSelectedTasks([]);
	};

	return (
		<View style={[{ flex: 1 }]}>
			<Toolbar 
			  hasSelected={selectedTasks.length > 0} 
			  name={'task'}
			  onRemove={() => removeSelectedTasks()} 
			/>
			<View style={styles.container}>
				<TaskList
					tasks={tasks}
					onLongPress={id => onTaskLongPress(id)}
					onSelect={id => addFinished(id)}
					addFinished={id => addFinished(id)}
					selectedTasks={selectedTasks}
					finishedTasks={finishedTasks}
				/>
			</View>
		</View>
  );
};

export default Tasks;
