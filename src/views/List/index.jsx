import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import SubList from '../../components/SubList';
import data from '../../resources/data.json';

const List = (BoardId, {navigation: { navigate }}) => {
	// Render list	
	return ( 
		<View style={{ flex: 1 }}>
			<Toolbar />
					<SubList lists={data.lists} boardId={BoardId} /> 
		</View>
	);
};

export default List;
