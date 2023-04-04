export const setUpEventListeners = (todos, todoList, main) => {
  const handleEdit = (editId, newDesc) => {
    todos.editTodo(editId, newDesc);
    todoList.innerHTML = '';
    main();
  };

  const todoEdits = document.querySelectorAll('.todo-edit');
  const todoTrash = document.querySelectorAll('.todo-trash');

  todoTrash.forEach((trash) => {
    trash.addEventListener('click', (e) => {
      const index = e.target.id.split('-')[2];
      todos.removeTodo(parseInt(index));
      todoList.innerHTML = '';
      main();
    });
    trash.style.display = 'none';
  });

  todoEdits.forEach((todoEdit) => {
    todoEdit.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        const editId = e.target.id.split('-')[2];
        const newDesc = e.target.value;
        handleEdit(editId, newDesc);
      }
    });
    todoEdit.style.display = 'none';
  });

  const todoDescs = document.querySelectorAll('.todo-desc');
  todoDescs.forEach((todoDesc) => {
    todoDesc.addEventListener('click', (e) => {
      const descId = e.target.id.split('-')[2];
      todoDesc.style.display = 'none';
      const todoMove = document.getElementById(`todo-move-${descId}`);
      todoMove.style.display = 'none';

      const editId = `todo-edit-${descId}`;
      const spanId = `todo-span-${descId}`;
      const containerId = `todo-item-${descId}`;
      const trashId = `todo-delete-${descId}`;

      const todoEdit = document.getElementById(editId);
      const todoDelete = document.getElementById(trashId);
      const todoSpan = document.getElementById(spanId);
      todoSpan.classList.add('todo-span-reversed');

      const todoContainer = document.getElementById(containerId);
      todoContainer.style.backgroundColor = '#f1ea6e';

      todoEdit.value = todoDesc.innerHTML.trim();
      todoEdit.style.display = 'inline-block';
      todoDelete.style.display = 'inline-block';
      todoEdit.focus();
    });
  });

  const checkBoxes = document.querySelectorAll('.todo-checkbox');
  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const index = e.target.id.split('-')[2];
      const todoDesc = document.getElementById(`todo-desc-${index}`);
      if (checkbox.checked) {
        todoDesc.classList.add('completed-todo');
      } else {
        todoDesc.classList.remove('completed-todo');
      }
      todos.markCompleted(index);
    });
  });

  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach((todoItem) => {
    todoItem.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
      setTimeout(() => {
        e.target.style.display = 'none';
      }, 0);
    });
  });
};
