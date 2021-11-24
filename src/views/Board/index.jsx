import React, { useState } from 'react';
import { View }
from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';

const Board = ({ navigation: { navigate } }) => {
    
	const [boards, setBoards] = useState(data.boards);
	
	const [selectedBoards, setSelectedBoards] = useState([]);
	
	const onBoardLongPress = name => {
		if (selectedBoards.indexOf(name) !== -1) {
			setSelectedBoards(selectedBoards.filter(board => board !== name));
		}
		else{
			setSelectedBoards([...selectedBoards, name]);
		}
	};

	return (
      <View style={{ flex: 1 }}>
        <Toolbar hasSelectedBoards={selectedBoards.length > 0} />
        <View style={styles.boardList}>
			<BoardList onLongPress={name => onBoardLongPress(name)} selectedBoards={selectedBoards} boards={boards}  />
		</View>

      </View>
    );
};

export default Board;
