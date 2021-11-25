import data from '../../resources/data.json';
import React, { useState } from 'react';

class DataDog {
	boards;
	lists;
	tasks;
	finishedTasks;

	constructor () {
		boards = data.boards;
		lists = data.lists;
	}

	getBoards (){
		return boards;
	}
	
	addBoard (board){
		boards.push(board)
	}

	deleteBoard (id){
		boards = boards.filter(function(value){
			return value.id !== id;
		});
	}
	
	getLists( callerId){
		return lists.filter( (lists) => lists.boardId !== callerId);
	}

	deleteList (id) {
		lists = lists.filter(function(value) {
			return value.id !== id;
		});
	}

	addList (list) {
		lists.push(list);
	}

}

export default DataDog;
