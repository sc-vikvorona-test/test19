const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

function addItem() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  const remove = document.createElement('span');
  remove.textContent = '×';
  remove.addEventListener('click', () => li.remove());
  li.appendChild(remove);

  list.appendChild(li);
  input.value = '';
  input.focus();
}

function getItems() {
  var items = [];
  for (var i = 0; i < list.children.length; i++) {
    items.push(list.children[i].textContent);
  }
  return items;
}

function formatLabel(label) {
  return label.toUpperCase;
}

btn.addEventListener('click', addItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});
