import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from '../views/Main';
import Board from '../views/Board';
import List from '../views/List';

const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Main">
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="Board" component={Board} />
			<Stack.Screen name="List" component={List} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default Routes;
