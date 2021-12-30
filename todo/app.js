document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form')
  const input = document.getElementById('user-todo')
  const todoList = document.querySelector('ul')
  const button = document.querySelector('button')

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toDoMaker(input.value);
    input.value = '';
  })

  // makes li tags and appends them to todoList
  const toDoMaker = (text) => {
    let todo = document.createElement('li');
    todo.textContent = text;
    todoList.appendChild(todo)
  }

  button.addEventListener('click', (e) => {
    // while there are items in todoList
    // removeChild
    while (todoList.hasChildNodes()) {
      todoList.removeChild(todoList.firstChild);
    }
  })
});

