import React from 'react';
import {
  View, FlatList, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const SubList = function ({
  lists, onLongPress, selectedLists, onSelect,
}) {
  const isSelected = (id) => {
    if (selectedLists.indexOf(id) !== -1) {
      return true;
    }

    return false;
  };

  return (
    <FlatList
      numColumns={2}
      data={lists}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.list,
            styles.shadow,
            { backgroundColor: item.color, opacity: isSelected(item.id) ? 0.5 : 1 }]}
          onLongPress={() => onLongPress(item.id)}
          onPress={() => onSelect(item.id)}
        >
          {
isSelected(item.id)
  ? <AntDesign name="checkcircleo" style={styles.selected} />
  : <> </>
}
          <View name="listName" style={{ flex: 1 }}>
            <Text style={[styles.shadow, styles.name]}>
              {' '}
              { item.name }
              {' '}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

SubList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedLists: PropTypes.arrayOf(PropTypes.number).isRequired,
  onLongPress: PropTypes.func.isRequired,
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SubList;
