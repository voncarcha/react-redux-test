export function setToken(token) {
  window.localStorage.setItem('authToken', token);
}

export function removeToken() {
  window.localStorage.removeItem('authToken');
}

export function getToken() {
  return window.localStorage.getItem('authToken');
}
