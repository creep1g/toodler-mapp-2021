import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../views/Main';
import Board from '../views/Board';
import List from '../views/List';
import Tasks from '../views/Tasks';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
