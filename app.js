const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const empty = document.getElementById('empty');
const counter = document.getElementById('counter');

let count = 0;

function updateState() {
  empty.style.display = count === 0 ? 'block' : 'none';
  counter.textContent = count > 0 ? `${count} item${count === 1 ? '' : 's'}` : '';
}

function addItem() {
  const text = input.value.trim();
  if (!text) return;

  count++;

  const li = document.createElement('li');
  li.textContent = text;

  const remove = document.createElement('span');
  remove.textContent = '×';
  remove.addEventListener('click', () => {
    li.remove();
    count--;
    updateState();
  });
  li.appendChild(remove);

  list.appendChild(li);
  input.value = '';
  input.focus();
  updateState();
}

btn.addEventListener('click', addItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});

updateState();
