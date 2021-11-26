import React, { useState, setState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import SubList from '../../components/SubList';
import AddListModal from '../../components/AddListModal';
import ModifyListModal from '../../components/ModifyListModal';
import styles from './styles';

const List = function ({ route, navigation }) {
  const { BoardId } = route.params;

  const { data } = route.params;

  const [lists, setLists] = useState(data.getLists(BoardId));

  const [selectedLists, setSelectedLists] = useState([]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

  const onListLongPress = (id) => {
    if (selectedLists.indexOf(id) !== -1) {
      setSelectedLists(selectedLists.filter((list) => list !== id));
    } else {
      setSelectedLists([...selectedLists, id]);
    }
  };

  const removeSelectedLists = () => {
    setLists(lists.filter((list) => !selectedLists.includes(list.id)));
	  selectedLists.forEach(
		  (listId) => {
					  data.deleteList(listId);
      },
    );
    setSelectedLists([]);
  };

  const addList = (input) => {
    const newList = {
      id: data.listNextId(),
      name: input.name,
      color: input.color,
      boardId: BoardId,
    };
    setLists([...lists, newList]);
    setIsAddModalOpen(false);
    data.addList(newList);
  };

  const getList = () => lists.filter((list) => list.id === selectedLists[0])[0];

  const modifyList = (input) => {
    const list = getList();
    list.name = input.name;
    list.description = input.description;
    list.thumbnailPhoto = input.thumbnailPhoto;
    setIsModifyModalOpen(false);
  };

  // Render list
  return (
    <View style={styles.container}>
      <Toolbar
        hasSelected={selectedLists.length}
        name="list"
        onRemove={() => removeSelectedLists()}
        onAdd={() => setIsAddModalOpen(true)}
        onModify={() => setIsModifyModalOpen(true)}
      />
      <SubList
        lists={lists}
        BoardId={BoardId}
        onLongPress={(id) => onListLongPress(id)}
        selectedLists={selectedLists}
        onSelect={(id) => navigation.navigate('Tasks', { data, ListId: id, BoardId })}
      />
      <AddListModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        addList={(input) => addList(input)}
        name="list"
      />
      <ModifyListModal
        isOpen={isModifyModalOpen}
        closeModal={() => setIsModifyModalOpen(false)}
        modifyList={(input) => modifyList(input)}
        list={getList()}
      />
    </View>
  );
};

export default List;
