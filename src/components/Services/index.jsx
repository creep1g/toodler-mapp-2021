import React, { useState } from 'react';
import data from '../../resources/data.json';

class DataDog {
  boards;

  lists;

  tasks;

  finishedTasks;

  constructor() {
    this.boards = data.boards;
    this.lists = data.lists;
  }

  getBoards() {
    return this.boards;
  }

  addBoard(board) {
    this.boards.push(board);
  }

  deleteBoard(id) {
    this.boards = this.boards.filter((value) => value.id !== id);
  }

  getLists(callerId) {
    return this.lists.filter((lists) => lists.boardId !== callerId);
  }

  deleteList(id) {
    this.lists = this.lists.filter((value) => value.id !== id);
  }

  addList(list) {
    lists.push(list);
  }
}

export default DataDog;
