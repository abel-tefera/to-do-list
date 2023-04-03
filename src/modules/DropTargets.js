export const setUpDropTargets = () => {
  const dropTargets = document.querySelectorAll('[class^=drop-target]');
  dropTargets.forEach((dropTarget) => {
    dropTarget.addEventListener('dragenter', (e) => {
      e.preventDefault();
      e.target.classList.add('drag-over');
    });
    dropTarget.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.target.classList.add('drag-over');
    });
    dropTarget.addEventListener('dragleave', (e) => {
      e.target.classList.remove('drag-over');
    });
    dropTarget.addEventListener('drop', (e) => {
      e.target.classList.remove('drag-over');

      const id = e.dataTransfer.getData('text/plain');

      const indexDrag = parseInt(id.split('-')[2]);
      const indexDrop = parseInt(e.target.id.split('-')[2]);

      todos.dragDrop(indexDrag, indexDrop);
      todoList.innerHTML = '';
      main();
    });
  });
};
