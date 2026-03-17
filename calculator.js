function divide(a, b) {
  return a / b;
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function getUser(id) {
  const users = { 1: "Alice", 2: "Bob" };
  return users[id];
}

module.exports = { divide, toUpperCase, getUser };
