// SAFE: Math.random() used only for visual animation timing, not for any security purpose
function attachAnimatedItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.style.animationDelay = `${Math.random() * 0.3}s`;
  document.getElementById('list').appendChild(li);
}

// RISKY: innerHTML set from raw user-supplied search query without any sanitization (XSS)
function showSearchBanner(query) {
  const banner = document.getElementById('search-banner');
  banner.innerHTML = 'You searched for: ' + query;
}

// UNCLEAR: localStorage stores formData which may or may not contain sensitive fields
// depending on which form calls this — cannot tell from this function alone
function saveDraft(formData) {
  localStorage.setItem('pending_submission', JSON.stringify(formData));
}
