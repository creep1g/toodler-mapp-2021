import React, {
  useState, useLocalStorage, useEffect, useReducer,
} from 'react';
import { View }
  from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import styles from './styles';
import AddBoardModal from '../../components/AddBoardModal';

const Board = function ({route, navigation: { navigate } }) {
  let data = route.params;
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
      id: data.boardNextId(),
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
			onSelect={(id) => navigate('List', {data: data, BoardId: id })}
          selectedBoards={selectedBoards}
          boards={boards}
        />
      </View>
      <AddBoardModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        addBoard={(input) => addBoard(input)}
        name="board"
      />
    </View>
  );
};

export default Board;
