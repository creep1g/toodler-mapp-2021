import React from 'react';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import styles from './styles';

const Toolbar = function ({ hasSelectedBoards, onAdd, onRemove }) {
  return (
    <View
      styleName="horizontal"
      style={styles.toolbar}
    >
      <TouchableHighlight
        style={styles.toolbarAction}
        onPress={onAdd}
      >
        <Text style={styles.toolbarActionText}>Add board</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.toolbarAction}
        onPress={onRemove}
        disabled={!hasSelectedBoards}>
        <Text
          style={ [ styles.toolbarActionText, !hasSelectedBoards ? { color: 'rgba(155, 155, 155, .5'} : {}]}>
          Delete board
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Toolbar;
