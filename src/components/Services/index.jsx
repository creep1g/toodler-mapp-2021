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
    this.tasks = data.tasks;
    this.finishedTasks = [];
    // this.populateFinished();
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
    return this.lists.filter((value) => value.boardId === callerId);
  }

  deleteList(id) {
    this.lists = this.lists.filter((value) => value.id !== id);
  }

  addList(list) {
    this.lists.push(list);
  }

  getTasks(callerId) {
    return this.tasks.filter((value) => value.listId === callerId);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((value) => value.id !== id);
  }

  moveTask(id, ListId) {
    this.tasks.forEach(
      (task) => {
        if (task.id === id) {
          task.listId = ListsId;
        }
      },
    );
  }

  addTask(task) {
    this.tasks.push(task);
  }

  markFinished(id) {
    this.tasks.forEach(
      (task) => {
        if (task.id === id) {
          if (task.isFinished === false) {
            task.isFinished = true;
          } else {
            task.isFinished = false;
          }
        }
      },
    );
    if (finishedTasks.includes(id)) {
      finishedTasks = finishedTasks.filter((value) => value !== id);
    } else {
      finishedTasks.push(id);
    }
  }

  populateFinished() {
    this.tasks.forEach(
      (task) => {
        if (task.isFinished === true) {
          finishedTasks.push(task.id);
        }
      },
    );
  }

  getFinishedTasks(callerId) {
    const filter = [];
    this.tasks.forEach(
      (task) => {
        if (finishedTasks.includes(task.id) && task.listId === callerId) {
          filter.push(task.id);
        }
      },
    );
    return filter;
  }

  addList(list) {
    lists.push(list);
  }
}

export default DataDog;
