import data from '../resources/data.json';

class DataDog {
  boards;

  lists;

  tasks;

  finishedTasks;

  listCounter;

  boardCounter;

  taskCounter;

  constructor() {
    this.boards = data.boards;
    this.lists = data.lists;
    this.tasks = data.tasks;
    this.finishedTasks = [];
    this.populateFinished();
    this.taskCounter = this.tasks.length;
    this.boardCounter = this.boards.length;
    this.listCounter = this.lists.length;
  }

  // Boards
  getBoards() {
    return this.boards;
  }

  addBoard(board) {
    this.boards.push(board);
  }

  deleteBoard(id) {
    this.boards = this.boards.filter((value) => value.id !== id);
  }

  boardNextId() {
    this.boardCounter++;
    return this.boardCounter;
  }

  // Lists
  getLists(callerId) {
    return this.lists.filter((value) => value.boardId === callerId);
  }

  getAllLists() {
    return this.lists;
  }

  deleteList(id) {
    this.lists = this.lists.filter((value) => value.id !== id);
  }

  addList(list) {
    this.lists.push(list);
  }

  listNextId() {
    this.listCounter++;
    return this.listCounter;
  }

  // Tasks
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

  taskNextId() {
    this.taskCounter++;
    return this.taskCounter;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  // Finished Tasks
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
    if (this.finishedTasks.includes(id)) {
      this.finishedTasks = this.finishedTasks.filter((value) => value !== id);
    } else {
      this.finishedTasks.push(id);
    }
  }

  populateFinished() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isFinished === true) {
        this.finishedTasks.push(this.tasks[i].id);
      }
    }
  }

  getFinishedTasks(callerId) {
    const filter = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.finishedTasks.includes(this.tasks[i].id) && this.tasks[i].listId === callerId) {
        filter.push(this.tasks[i].id);
      }
    }

    return filter;
  }
}

export default DataDog;
