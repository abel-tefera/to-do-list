import '@fortawesome/fontawesome-free/css/all.min.css';

import './style.css';
import {TodoItem} from './modules/TodoItem';
import {Todos} from './modules/Todos';
import {Todo} from './modules/Todo';

const todos = new Todos();

customElements.define('todo-item', TodoItem);
const todoList = document.querySelector('.todo-list');

const main = () => {
  for (const todo of todos.todoList) {
    const {index, description, completed} = todo;

    const todoLi = document.createElement('li');
    todoLi.classList.add('bottom-border');
    todoLi.innerHTML = `<todo-item
    index=${JSON.stringify(index)}
    description=${JSON.stringify(description)}
    completed=${JSON.stringify(completed)}
    class="todo-item"
    ></todo-item>`;
    todoList.appendChild(todoLi);
  }

  const checkBoxes = document.querySelectorAll('.todo-checkbox');
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const index = e.target.id.split('-')[1];
      todos.markCompleted(index);
    });
  });
};
const todoInput = document.querySelector('.todo-input');
const clearCompleted = document.querySelector('.clear');

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    addTodoHandler();
  }
});

const addTodoHandler = () => {
  const currentLength = todos.todoList.length;
  const todo = new Todo(todoInput.value, currentLength);
  todos.addTodo(todo);
  todoList.innerHTML = '';
  todoInput.value = '';
  main();
};

const removeHandler = () => {
  todos.removeCompleted();
  todoList.innerHTML = '';
  main();
};

const addBtn = document.querySelector('.fa-plus');
addBtn.addEventListener('click', addTodoHandler);
clearCompleted.addEventListener('click', removeHandler);

main();
