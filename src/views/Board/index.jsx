import React from 'react';
import {
  View, Text,
} from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';

class Board extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <View style={styles.boardList}>
          <BoardList boards={data.boards} />
        </View>
      </View>
    );
  }
}

export default Board;
