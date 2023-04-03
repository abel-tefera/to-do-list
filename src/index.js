/* eslint-disable */

import '@fortawesome/fontawesome-free/css/all.min.css';

import './style.css';
import {TodoItem} from './modules/TodoItem';
import {Todos} from './modules/Todos';
import {Todo} from './modules/Todo';
import { setUpDropTargets } from './modules/DropTargets';
import { setUpEventListeners } from './modules/EventListeners';

const todos = new Todos();

customElements.define('todo-item', TodoItem);
const todoList = document.querySelector('.todo-list');

const main = () => {
  for (const todo of todos.todoList) {
    const {index, description, completed} = todo;

    const todoLi = document.createElement('li');
    todoLi.classList.add(`drop-target-${JSON.stringify(index)}`);
    todoLi.innerHTML = `<todo-item
    id="todo-item-${JSON.stringify(index)}"
    index=${JSON.stringify(index)}
    description=${JSON.stringify(description)}
    completed=${JSON.stringify(completed)}
    class="todo-item bottom-border"
    draggable="true"
    ></todo-item>`;
    todoList.appendChild(todoLi);
  }
  setUpEventListeners(todos, todoList, main);
  setUpDropTargets();
};
const todoInput = document.querySelector('.todo-input');
const clearCompleted = document.querySelector('.clear');

todoInput.addEventListener('keydown', (e) => {
  if (
    (e.key === 'Enter' || e.keyCode === 13) &&
    todoInput.value.trim() !== ''
  ) {
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
addBtn.addEventListener('click', () => {
  if (todoInput.value.trim() !== '') {
    addTodoHandler();
  }
});
clearCompleted.addEventListener('click', removeHandler);

const refresh = document.querySelector('.refresh-btn');
refresh.addEventListener('click', (e) => {
  e.target.classList.add('refresh');
  todoList.innerHTML = '';
  main();
  setTimeout(() => {
    e.target.classList.remove('refresh');
  }, 2000)
})

main();
