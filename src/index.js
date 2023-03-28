import "./style.css"

const todos = [
  {
    _id: 1,
    title: "Work",
    description: "You have to work to live?",
    completed: false,
  },
  {
    _id: 2,
    title: "Eat",
    description: "You have to eat to live?",
    completed: false,
  },
  {
    _id: 3,
    title: "Sleep",
    description: "You have to sleep to live?",
    completed: false,
  },
];

const main = () => {
    const todoList = document.querySelector('.todo-list');
    for (const todo of todos){
        const listItem = document.createElement('li');
        listItem.innerHTML = todo.title
        todoList.appendChild(listItem)
    }
}

main();