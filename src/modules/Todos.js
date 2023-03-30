export class Todos {
  constructor() {
    const todoDataFromLocalStorage = JSON.parse(
        localStorage.getItem('todoData'),
    );
    const todoLSExists =
      todoDataFromLocalStorage !== undefined &&
      todoDataFromLocalStorage !== null;

    this.todoList = todoLSExists ? todoDataFromLocalStorage : [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
    this.saveToLocalStorage();
  }

  removeTodo(idx) {
    this.todoList = this.todoList.filter(({index}) => index !== idx);
    this.todoList = this.todoList.map((todo, i) => {
      return {
        ...todo,
        index: i,
      };
    });
    this.saveToLocalStorage();
  }

  editTodo(idx, newDesc) {
    const todo = this.todoList.find(({index}) => index === parseInt(idx));
    todo.description = newDesc;
    this.todoList = this.todoList.map((todos) => {
      if (todos.index === idx) {
        return todo;
      }
      return {
        ...todos,
      };
    });
    this.saveToLocalStorage();
  }

  removeCompleted() {
    this.todoList = this.todoList.filter(({completed}) => completed !== true);
    this.todoList = this.resetIndex();
    this.saveToLocalStorage();
  }

  markCompleted(idx) {
    this.todoList = this.todoList.map((todo) => {
      if (todo.index === parseInt(idx)) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return {
        ...todo,
      };
    });
    this.saveToLocalStorage();
  }

  dragDrop(i, j) {
    this.todoList.splice(j, 0, this.todoList.splice(i, 1)[0]);
    this.todoList = this.resetIndex();
    this.saveToLocalStorage();
  }

  resetIndex() {
    return this.todoList.map((todo, i) => {
      return {
        ...todo,
        index: i,
      };
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('todoData', JSON.stringify(this.todoList));
  }
}
