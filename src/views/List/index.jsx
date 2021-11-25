import React, { useState, setState } from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import SubList from '../../components/SubList';
import data from '../../resources/data.json';

const List = function ({ route, navigation }) {
  const { BoardId } = route.params;
  console.log(BoardId);
  const [lists, setLists] = useState(
    data.lists.filter((lists) => lists.boardId === BoardId),
  );

  const [selectedLists, setSelectedLists] = useState([]);

  const onListLongPress = (name) => {
    if (selectedLists.indexOf(name) !== -1) {
      setSelectedLists(selectedLists.filter((list) => list !== name));
    } else {
      setSelectedLists([...selectedLists, name]);
    }
  };

  // Render list
  return (
    <View style={{ flex: 1 }}>
      <Toolbar hasSelected={false} name="list" />
      <SubList
        lists={lists}
        BoardId={BoardId}
        onLongPress={(name) => onListLongPress(name)}
        selectedLists={selectedLists}
        onSelect={(id) => navigation.navigate('Task', { ListId: id })}
      />
    </View>
  );
};

export default List;