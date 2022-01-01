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
    let radioButton = createCheckMarkElement('todo-radio', false);
    todo.appendChild(radioButton);
    todoList.appendChild(todo)
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


  button.addEventListener('click', (e) => {
    while (todoList.hasChildNodes()) {
      todoList.removeChild(todoList.firstChild);
    }
  })
});

