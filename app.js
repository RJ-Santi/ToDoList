const form = document.querySelector('.to-do');
const ul = document.querySelector('ul');
const button = document.querySelector('.btn');
const input = document.querySelector('#item');
const list = document.querySelector('#list');


const liMaker = (text) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'col-6', 'mx-auto');
  li.textContent = text;
  ul.appendChild(li);
}

// Event listeners for adding and deleting
form.addEventListener('submit', function(e) {
  e.preventDefault();
  list.style.display = 'block';

  liMaker(input.value);
  input.value = '';
});

button.addEventListener('click', function(e) {
  e.preventDefault();
  list.innerHTML = '';
});
