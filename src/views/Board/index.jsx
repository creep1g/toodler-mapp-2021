import React, {
  useState, useLocalStorage, useEffect, useReducer,
} from 'react';
import { View }
  from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import styles from './styles';
import AddBoardModal from '../../components/AddBoardModal';
import ModifyBoardModal from '../../components/ModifyBoardModal';

const Board = function ({ route, navigation: { navigate } }) {
  const data = route.params;
  const [boards, setBoards] = useState(data.getBoards());

  const [selectedBoards, setSelectedBoards] = useState([]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

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

  const getBoard = () => boards.filter((b) => b.id === selectedBoards[0])[0];

  const modifyBoard = (input) => {
    let board = getBoard();
    board.name = input.name;
    board.description = input.description;
    board.thumbnailPhoto = input.thumbnailPhoto;
    setIsModifyModalOpen(false);
  };


  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        hasSelected={selectedBoards.length}
        onAdd={() => setIsAddModalOpen(true)}
        onRemove={() => removeSelectedBoards()}
        onModify={() => setIsModifyModalOpen(true)}
        name="boards"
      />
      <View style={styles.boardList}>
        <BoardList
          onLongPress={(id) => onBoardLongPress(id)}
          onSelect={(id) => navigate('List', { data, BoardId: id })}
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
      <ModifyBoardModal
        isOpen={isModifyModalOpen}
        closeModal={() => setIsModifyModalOpen(false)}
        modifyBoard={(input) => modifyBoard(input)}
        name="board"
        board={getBoard()}
      />
    </View>
  );
};

export default Board;
