import React from 'react';
import { View }
from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';

const Board = ({ navigation: { navigate } }) => {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <View style={styles.boardList}>
          <BoardList boards={data.boards} />
        </View>
      </View>
    );
};

export default Board;
