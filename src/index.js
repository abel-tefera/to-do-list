import './style.css';
import {TodoItem} from './modules/TodoItem';

const todos = [
  {
    description: 'work out',
    completed: false,
    index: 1,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'prepare for interview',
    completed: true,
    index: 3,
  },
];

customElements.define('todo-item', TodoItem);

const main = () => {
  const todoList = document.querySelector('.todo-list');
  for (const todo of todos) {
    const {index, description, completed} = todo;

    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item', 'bottom-border');
    todoLi.innerHTML = `<todo-item
    index=${JSON.stringify(index)}
    description=${JSON.stringify(description)}
    completed=${JSON.stringify(completed)}
    class="todo-item"
    ></todo-item>`;
    todoList.appendChild(todoLi);
  }
};

main();
