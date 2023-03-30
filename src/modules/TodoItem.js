export class TodoItem extends HTMLElement {
  connectedCallback() {
    const {index, completed, description} = this.attributes;
    const checked = completed.value == 'true' ? 'checked' : undefined;
    this.innerHTML = `
    <span class="todoitem-span" id="todo-container-${index.value}">
      <input
        id="todo-checkbox-${index.value}"
        class="todo-checkbox"
        type="checkbox"
        ${checked}
      />
      <span class="todo-span" id="todo-span-${index.value}">
      <p class="m-0 todo-desc" 
      id="todo-desc-${index.value}">
      ${description.value}</p>
      <input
        id="todo-edit-${index.value}" 
        class="todo-edit disable-outline"
        type="text"
      />
      </span>
    </span>
      <i class="fa fa-ellipsis-v dot-3 drag-icon" 
      id="todo-move-${index.value}"></i>
      <i class="fa fa-trash todo-trash click-icon" 
      id="todo-delete-${index.value}"></i>
    `;
  }
}
