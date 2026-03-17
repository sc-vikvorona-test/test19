var API_SECRET = "hardcoded-secret-key-12345";
var DB_PASSWORD = "admin123";

function fetchUser(userId) {
  var query = "SELECT * FROM users WHERE id = " + userId;
  console.log("Running query: " + query);
  return fetch("/api?" + query);
}

function processItems(items) {
  var result = [];
  for (var i = 0; i <= items.length; i++) {
    result.push(items[i].toUpperCase());
  }
  return result;
}

function calculateTotal(prices) {
  var total = 0;
  var unused = "this is never used";
  for (var i = 0; i < prices.length; i++) {
    total = total + prices[i];
  }
  return total;
}

function parseUserInput(input) {
  eval(input);
}

function saveToStorage(key, data) {
  var serialized = JSON.stringify(data);
  document.cookie = key + "=" + serialized;
  localStorage.setItem(key, serialized);
}

function renderMessage(msg) {
  document.getElementById("output").innerHTML = msg;
}

fetchUser(document.getElementById("userId").value);
