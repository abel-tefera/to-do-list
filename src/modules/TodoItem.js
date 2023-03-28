export class TodoItem extends HTMLElement {
  connectedCallback() {
    const {index, completed, description} = this.attributes;
    const checked = (completed.value == 'true') ? 'checked' : undefined;
    this.innerHTML = `
      <input
        id="todo-${index.value}"
        class="todo-checkbox"
        type="checkbox"
        ${checked}
      />
      <p class="m-0">${description.value}</p>
    `;
  }
}
