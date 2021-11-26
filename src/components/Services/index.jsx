import React, { useState } from 'react';
import data from '../../resources/data.json';

class DataDog {
	boards;
	lists;
	tasks;
	finishedTasks;

	constructor () {
		this.boards = data.boards;
		this.lists = data.lists;
		this.tasks = data.tasks;
		finishedTasks = [];
		this.populateFinished();
	}
	
	getBoards () {
		return this.boards;
	}
	
	addBoard (board) {
		this.boards.push(board)
	}

	deleteBoard (id) {
		this.boards = this.boards.filter(function(value){
			return value.id !== id;
		});
	}
	
	getLists (callerId) {
		return this.lists.filter(function(value){
			return value.boardId === callerId;
		});
	}

	deleteList (id) {
		this.lists = this.lists.filter(function(value) {
			return value.id !== id;
		});
	}

	addList (list) {
		this.lists.push(list);
	}

	getTasks (callerId){
		return this.tasks.filter(function(value){
			return value.listId === callerId;
		});
	}

	deleteTask (id) {
		this.tasks = this.tasks.filter(function(value) {
			return value.id !== id;
		})
	}

	moveTask (id, ListId) {
		this.tasks.forEach(
			function(task){
				if (task.id === id){
					task.listId = ListsId
				}
			}
		);
		
	}

	addTask (task) {
		this.tasks.push(task);
	}

	markFinished (id) {
		this.tasks.forEach(
			function(task){
				if (task.id === id){
					if (task.isFinished === false){
					task.isFinished = true;
				
					}
					else{
						task.isFinished = false;
					}
				}
			}
		)
		if (finishedTasks.includes(id)){
			finishedTasks = finishedTasks.filter(function(value){ return value !== id })
		}
		else{
			finishedTasks.push(id);
		}

			
	}

	populateFinished () {
		this.tasks.forEach( 
			function(task){
				if (task.isFinished === true){
					finishedTasks.push(task.id);
				}
			}
		);
	}
	getFinishedTasks (callerId) {
		let filter = [];
		this.tasks.forEach(
			function(task){
				if (finishedTasks.includes(task.id) && task.listId === callerId){
					filter.push(task.id);
				}	
			}
		);
		return filter; 
	}

  addList(list) {
    lists.push(list);
  }
}

export default DataDog;
