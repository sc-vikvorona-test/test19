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

btn.addEventListener('click', addItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});
