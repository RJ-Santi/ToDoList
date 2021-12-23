const form = document.querySelector('.to-do');
const ul = document.querySelector('ul');
const button = document.querySelector('.btn');
const input = document.querySelector('#item');
const list = document.querySelector('#list');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  document.addEventListener('DOMContentLoaded', tasksExist);
  form.addEventListener('submit', addTask);
  button.addEventListener('click', clearTasks);
}


const liMaker = (text) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'col-6', 'mx-auto');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);

  // Store in local storage
  storeTaskInLocalStorage(input.value);
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((tasks) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'col-6', 'mx-auto');
    li.textContent = tasks;
    ul.appendChild(li);
  });

}

// adding tasks
function addTask(e) {
  e.preventDefault();
  list.style.display = 'block';

  liMaker(input.value);
  input.value = '';
};

// clearing all tasks
function clearTasks(e) {
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  list.style.display = 'none';

  clearTasksFromLocalStorage();
}

// clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// show items if local storage contains them
function tasksExist() {
  if(localStorage.getItem('tasks') != null) {
    list.style.display = 'block';
  }
}
