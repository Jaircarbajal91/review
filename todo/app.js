document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('form')
  const input = document.getElementById('user-todo')
  const todoList = document.querySelector('ul')
  const button = document.querySelector('button')
  const checkbox = document.querySelector("input[name=checkbox]");


  const todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  localStorage.setItem('todos', JSON.stringify(todosArray))

  const storage = JSON.parse(localStorage.getItem('todos'))

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    todosArray.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    toDoMaker(input.value);
    input.value = '';
    console.log(localStorage)
  })

  const removeItemFromLocalStorage = (value) => {
    const index = todosArray.indexOf(value)
    todosArray.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todosArray))
  }

  const createCheckMarkElement = (name, checked) => {
    var radioHtml = '<input type="checkbox" name="' + name + '"';
    if (checked) {
      radioHtml += ' checked="checked"';
    }
    radioHtml += '/>';
    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;
    return radioFragment.firstChild
  }

  // makes li tags and appends them to todoList
  const toDoMaker = (text) => {
    let todo = document.createElement('li');
    todo.textContent = text;
    let radioButton = createCheckMarkElement('todo-radio', false);
    radioButton.addEventListener('change', (e) => {
      removeItemFromLocalStorage(todo.textContent)
      // console.log(todo.textContent)
      todo.remove();
    })
    todo.appendChild(radioButton);
    todoList.appendChild(todo)
  }

  for (let todo of storage) {
    toDoMaker(todo)
  }

  button.addEventListener('click', (e) => {
    localStorage.clear()
    while (todoList.hasChildNodes()) {
      todoList.removeChild(todoList.firstChild);
    }
  })
});

