import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import styles from './styles';

const Tasks = ( { route, navigation: { navigate } } ) => {
  
	// Fetch list id from route parameters
	const { ListId } = route.params;

	// Filter out irrelevant tasks from out data stream
	const [tasks, setTasks] = useState(
		data.tasks.filter( (tasks) => tasks.listId === ListId )
	);

	// Selected tasks datastructure initialized
	const [ selectedTasks, setSelectedTasks ] = useState([]);
	
	// Finished tasks datastructure initialized
	const [ finishedTasks, setFinishedTasks ] = useState([]);

	// When tasks are marked finished they will be added to finisheTasks

	const addFinished = id => {
		if ( finishedTasks.indexOf(id) !== -1 ) {
			setFinishedTasks(finishedTasks.filter(task => task !== id));
		}
		else{
			setFinishedTasks([...finishedTasks, id])
		}
	};


	// Adds tasks that are already finished to finished task data structure
	const addPreExisting = (tasks, finishedTasks) => {
		tasks.forEach(function (task) {
			if (task.isFinished){
				// setFinishedTasks(finishedTasks.filter(task => task !== task.id))
				setFinishedTasks([...finishedTasks, task.id])
				finishedTasks.push(task.id)
			}
		});
	
	}

	 // addPreExisting(tasks, finishedTasks);

	const onTaskLongPress = id => {
		if (selectedTasks.indexOf(id) !== -1) {
			setSelectedTasks(selectedTasks.filter(task => task !== id));
		}
		else {
			setSelectedTasks([...selectedTasks, id])		
		}
	}
	useEffect(() => {
		console.log(finishedTasks[0]);
		setTasks(tasks);
	})


	const removeSelectedTasks = () => {
		setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
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
