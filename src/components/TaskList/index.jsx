import React from 'react';
import {
  View, FlatList, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskList = function ({
  tasks, onLongPress, onSelect, finishedTasks, selectedTasks,
}) {
  const isSelected = (id) => {
    if (selectedTasks.indexOf(id) !== -1) {
      return true;
    }

    return false;
  };

  const isFinished = (id) => {
    if (finishedTasks.indexOf(id) !== -1) {
      return true;
    }

    return false;
  };

  return (

    <View>
      <FlatList
        numColumns={1}
        data={tasks}
        renderItem={({ item: { id, name, description } }) => (
          <TouchableOpacity
            onPress={() => onSelect(id)}
            onLongPress={() => onLongPress(id)}
            style={[styles.card, styles.shadow, { opacity: isSelected(id) ? 0.5 : 1 }]}
          >
            {
              isSelected(id)
                ? <AntDesign name="checkcircleo" style={styles.selected} />
                : <></>
            }
            {
            isFinished(id)
              ? <AntDesign name="checksquare" style={styles.finished} />
              : <AntDesign name="checksquareo" style={styles.notFinished} />
            }
            <View style={[styles.description, { opacity: isSelected ? 1 : 0.5 }]}>
              <Text style={styles.heading}>{ name }</Text>
              <Text style={styles.description}>{ description }</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(task) => task.id}
      />
    </View>
  );
};

TaskList.propTypes = {
  // tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLongPress: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  finishedTasks: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedTasks: PropTypes.arrayOf(PropTypes.number).isRequired,

};

export default TaskList;
