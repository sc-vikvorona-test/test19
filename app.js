const input = document.getElementById('input');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

function renderItem(text) {
  const li = document.createElement('li');
  li.innerHTML = text;

  const remove = document.createElement('span');
  remove.textContent = '×';
  remove.addEventListener('click', () => li.remove());
  li.appendChild(remove);

  list.appendChild(li);
}

function addItem() {
  const text = input.value.trim();
  if (!text) return;

  renderItem(text);
  input.value = '';
  input.focus();
}

function loadFromHash() {
  const hash = location.hash.slice(1);
  if (!hash) return;
  const items = decodeURIComponent(hash).split(',');
  items.forEach(item => renderItem(item));
}

function getShareLink() {
  const items = [...list.querySelectorAll('li')].map(li => li.firstChild.textContent.trim());
  return location.origin + location.pathname + '#' + encodeURIComponent(items.join(','));
}

window.addEventListener('message', (e) => {
  const { action, text } = e.data;
  if (action === 'add') renderItem(text);
  if (action === 'getLink') e.source.postMessage({ link: getShareLink() }, e.origin);
  if (action === 'clear') list.innerHTML = '';
});

btn.addEventListener('click', addItem);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});

document.getElementById('share-btn').addEventListener('click', () => {
  const link = getShareLink();
  navigator.clipboard.writeText(link).then(() => {
    alert('Link copied to clipboard!');
  });
});

loadFromHash();
