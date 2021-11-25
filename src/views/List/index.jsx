import React, { useState, setState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import SubList from '../../components/SubList';
import data from '../../resources/data.json';
import AddModal from '../../components/AddModal';
import styles from './styles';
import BoardData from '../../components/Services/';

const List = function ({ route, navigation }) {

  const { BoardId } = route.params;

  const [lists, setLists] = useState(
    data.lists.filter((list) => list.boardId === BoardId),
  );

  const [selectedLists, setSelectedLists] = useState([]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onListLongPress = (id) => {
    if (selectedLists.indexOf(id) !== -1) {
      setSelectedLists(selectedLists.filter((list) => list !== id));
    } else {
      setSelectedLists([...selectedLists, id]);
    }
  };

  const removeSelectedLists = () => {
    setLists(lists.filter((list) => !selectedLists.includes(list.id)));
	setSelectedLists([]);
  };

  const addList = (input) => {
    console.log(input);
  };

  // Render list
  return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={selectedLists.length > 0}
        name="list"
        onRemove={() => removeSelectedLists()}
        onAdd={() => setIsAddModalOpen(true)}
      />
      <SubList
        lists={lists}
        BoardId={BoardId}
        onLongPress={(id) => onListLongPress(id)}
        selectedLists={selectedLists}
        onSelect={(id) => navigation.navigate('Tasks', { ListId: id, BoardId })}
      />
      <AddModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        addBoard={(input) => addList(input)}
        name="list"
      />
    </View>
  );
};

export default List;
