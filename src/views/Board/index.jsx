import React, { useState } from 'react';
import { View }
from 'react-native';
import Toolbar from '../../components/Toolbar';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';
import BoardInput from '../../components/BoardInputHandler';

const Board = ({ navigation: { navigate } }) => {
    
	const [boards, setBoards] = useState(data.boards);
	
	const [selectedBoards, setSelectedBoards] = useState([]);
	
	const onBoardLongPress = id => {
		if (selectedBoards.indexOf(id) !== -1) {
			setSelectedBoards(selectedBoards.filter(board => board !== id));
		}
		else{
			setSelectedBoards([...selectedBoards, id]);
		}
	};

	const onBoardPress = id => {
		console.log(id);
		console.log('this ran');
	}


	return (
      <View style={{ flex: 1 }}>
        <Toolbar hasSelected={selectedBoards.length > 0} name={'board'} />
        <View style={styles.boardList}>
			<BoardList 
				onLongPress={id => onBoardLongPress(id)} 
				onBoardPress={id => onBoardPress(id)}
				onSelect={id => navigate('List', { BoardId: id })} 
				selectedBoards={selectedBoards} 
				boards={boards}/>
		</View>

      </View>
    );
};

export default Board;
