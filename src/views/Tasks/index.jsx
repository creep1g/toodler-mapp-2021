import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import AddTaskModal from '../../components/AddTaskModal';
import ModifyTaskModal from '../../components/ModifyTaskModal';
import styles from './styles';

const Tasks = function ({ route, navigation: { navigate } }) {
  // Fetch list id from route parameters
  const { ListId } = route.params;
  const { data } = route.params;

  // Filter out irrelevant tasks from out data stream
  const [tasks, setTasks] = useState(data.getTasks(ListId));

  // Selected tasks datastructure initialized
  const [selectedTasks, setSelectedTasks] = useState([]);

  // Finished tasks datastructure initialized
  const [finishedTasks, setFinishedTasks] = useState(data.getFinishedTasks(ListId));
  // When tasks are marked finished they will be added to finisheTasks
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

  const addFinished = (id) => {
    if (finishedTasks.indexOf(id) !== -1) {
      setFinishedTasks(finishedTasks.filter((task) => task !== id));
    } else {
      setFinishedTasks([...finishedTasks, id]);
    }
    data.markFinished(id);
  };

  const onTaskLongPress = (id) => {
    if (selectedTasks.indexOf(id) !== -1) {
      setSelectedTasks(selectedTasks.filter((task) => task !== id));
    } else {
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  const removeSelectedTasks = () => {
    setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
    selectedTasks.forEach(
      (taskId) => {
        data.deleteTask(taskId);
      },
    );
    setSelectedTasks([]);
  };

  const addTask = (input) => {
    const newTask = {
	  id: data.taskNextId(),
      name: input.name,
	  description: input.description,
	  isFinished: false,
	  listId: ListId,
    };
    setTasks([...tasks, newTask]);
    setIsAddModalOpen(false);
    data.addTask(newTask);
  };

  const getTask = () => tasks.filter((task) => task.id === selectedTasks[0])[0];

  const modifyTask = (input) => {
    const task = getTask();
    task.name = input.name;
    task.description = input.description;
    task.listId = input.listId;
    setIsModifyModalOpen(false);
  };

  return (
    <View style={[{ flex: 1 }]}>
      <Toolbar
        hasSelected={selectedTasks.length}
        onRemove={() => removeSelectedTasks()}
        name="task"
        onAdd={() => setIsAddModalOpen(true)}
        onModify={() => setIsModifyModalOpen(true)}
      />
      <View style={styles.container}>
        <TaskList
          tasks={tasks}
          onLongPress={(id) => onTaskLongPress(id)}
          onSelect={(id) => addFinished(id)}
          addFinished={(id) => addFinished(id)}
          selectedTasks={selectedTasks}
          finishedTasks={finishedTasks}
        />
      </View>
      <AddTaskModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        addTask={(input) => addTask(input)}
      />
      <ModifyTaskModal
        isOpen={isModifyModalOpen}
        closeModal={() => setIsModifyModalOpen(false)}
        modifyTask={(input) => modifyTask(input)}
        task={getTask()}
      />
    </View>
  );
};

export default Tasks;
