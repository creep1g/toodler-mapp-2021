import React, { useState, setState } from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import SubList from '../../components/SubList';
import data from '../../resources/data.json';
import styles from './styles';

const List = ({route, navigation }) => {
	const { BoardId } = route.params;

	const [lists, setLists] = useState(
		data.lists.filter( (lists) => lists.boardId === BoardId ) 
									);

  const [selectedLists, setSelectedLists] = useState([]);

	const onListLongPress = id => {
		if (selectedLists.indexOf(id) !== -1) {
			setSelectedLists(selectedLists.filter(list => list !== id));
		}
		else {
			setSelectedLists([...selectedLists, id]);
		}
	}
	
	// Render list	
	return ( 
		<View style={styles.container}>
			<Toolbar hasSelected={false} name={'list'}/>
					<SubList 
					lists={lists} 
					BoardId={BoardId} 
					onLongPress={id => onListLongPress(id)}
					selectedLists={selectedLists}
						onSelect={id => navigation.navigate('Tasks', {ListId:id, BoardId:BoardId})}/> 
		</View>
	);
};

export default List;
