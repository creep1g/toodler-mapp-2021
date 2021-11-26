import React, { useState } from 'react';
import {
  View, FlatList, Text, TouchableHighlight, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const TaskList = function ({
  tasks, onLongPress, addFinished, onSelect, finishedTasks, selectedTasks,
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
							  ?							<AntDesign name="checkcircleo" style={styles.selected} />
							  :							<></>
						}
            {
							isFinished(id)
							  ?								<AntDesign name="checksquare" style={styles.finished} />
							  :								<AntDesign name="checksquareo" style={styles.notFinished} />
						}
            {/* </TouchableHighlight> */}
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

export default TaskList;
