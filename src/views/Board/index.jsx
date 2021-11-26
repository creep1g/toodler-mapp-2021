import React, {
  useState, useLocalStorage, useEffect, useReducer,
} from 'react';
import { View }
  from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
// import data from '../../resources/data.json';
import styles from './styles';
import AddModal from '../../components/AddBoardModal';
// import AddModal from '../../components/AddModal';

const Board = function ({ route, navigation: { navigate } }) {
  const data = route.params;

  const [boards, setBoards] = useState(data.getBoards());

  const [selectedBoards, setSelectedBoards] = useState([]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const removeSelectedBoards = () => {
    setBoards(boards.filter((board) => !selectedBoards.includes(board.id)));

	  selectedBoards.forEach(
		  (boardId) => {
					  data.deleteBoard(boardId);
      },
    );

    setSelectedBoards([]);
  };

  const onBoardLongPress = (id) => {
    if (selectedBoards.indexOf(id) !== -1) {
	  setSelectedBoards(selectedBoards.filter((board) => board !== id));
    } else {
	  setSelectedBoards([...selectedBoards, id]);
    }
  };

  const addBoard = (input) => {
    const newBoard = {
      id: boards.length + 1,
      name: input.name,
      description: input.description,
      thumbnailPhoto: input.thumbnailPhoto,
    };
    setBoards([...boards, newBoard]);
    setIsAddModalOpen(false);
    data.addBoard(newBoard);
  };

  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        hasSelected={selectedBoards.length > 0}
        onAdd={() => setIsAddModalOpen(true)}
        onRemove={() => removeSelectedBoards()}
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
      </View>
      <AddModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        addBoard={(input) => addBoard(input)}
        name="board"
      />
    </View>
  );
};

export default Board;
