export class Todos {
  constructor() {
    const todoDataFromLocalStorage = JSON.parse(
        localStorage.getItem('todoData'),
    );
    const todoLSExists =
      todoDataFromLocalStorage !== undefined &&
      todoDataFromLocalStorage !== null;

    this.todoList = todoLSExists ?
      todoDataFromLocalStorage :
      [
      ];
  }

  addTodo(todo) {
    this.todoList.push(todo);
    localStorage.setItem('todoData', JSON.stringify(this.todoList));
  }

  removeCompleted() {
    this.todoList = this.todoList.filter(({completed}) => completed !== true);
    this.todoList = this.todoList.map((todo, i) => {
      return {
        ...todo,
        index: i,
      };
    });
    localStorage.setItem('todoData', JSON.stringify(this.todoList));
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
    localStorage.setItem('todoData', JSON.stringify(this.todoList));
  }
}
