import React from 'react';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Toolbar = function ({ hasSelected, name}) {
  return (
    <View
      styleName="horizontal"
      style={styles.toolbar}
    >
      <TouchableHighlight
        style={styles.toolbarAction}
      >
        <Text style={styles.toolbarActionText}>Add {name}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.toolbarAction}
        disabled={!hasSelected}>
        <Text
          style={ [ styles.toolbarActionText, !hasSelected ? { color: 'rgba(155, 155, 155, .5'} : {}]}>
          Modify {name}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.toolbarAction}
        disabled={!hasSelected}>
        <Text
          style={ [ styles.toolbarActionText, !hasSelected ? { color: 'rgba(155, 155, 155, .5'} : {}]}>
          Delete {name}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

Toolbar.propTypes = {
  // Determines whether any boards are currently selected
  hasSelected: PropTypes.bool.isRequired
};

export default Toolbar;
