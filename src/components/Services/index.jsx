import data from '../../resources/data.json';
import React, { useState } from 'react';

class DataDog {
	boards;
	lists;
	tasks;
	finishedTasks;

	constructor () {
		boards = data.boards;
	}

	getBoards (){
		return boards;
	}
	
	addBoard (board){
		boards.push(board)
	}

	deleteBoard (id){
		console.log(id);
		boards = boards.filter(function(value){
			return value.id != id;
		});
		console.log(boards);
	}

}

export default DataDog;
