import React, { useState } from 'react';
import { View }
  from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';
import AddModal from '../../components/AddModal';

const Board = function ({ navigation: { navigate } }) {
  const [boards] = useState(data.boards);

  const [selectedBoards, setSelectedBoards] = useState([]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onBoardLongPress = (id) => {
    if (selectedBoards.indexOf(id) !== -1) {
      setSelectedBoards(selectedBoards.filter((board) => board !== id));
    } else {
      setSelectedBoards([...selectedBoards, id]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        hasSelected={selectedBoards.length > 0}
        onAdd={() => setIsAddModalOpen(true)}
        name="boards"
      />
      <View style={styles.boardList}>
        <BoardList
          onLongPress={(id) => onBoardLongPress(id)}
          // onBoardPress={(id) => onBoardPress(id)}
          onSelect={(id) => navigate('List', { BoardId: id })}
          selectedBoards={selectedBoards}
          boards={boards}
        />
        {/*
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => setIsAddModalOpen(false)}
          enterBoard={() => {}}
        />
        */}
      </View>

    </View>
  );
};

export default Board;
