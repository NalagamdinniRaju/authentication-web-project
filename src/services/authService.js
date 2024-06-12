// src/services/authService.js

const authDataKey = 'userData';

const register = (username, password) => {
  const userData = {
    username,
    password,
    isAuthenticated: false
  };
  localStorage.setItem(authDataKey, JSON.stringify(userData));
  return true;
};

const login = (username, password) => {
  const userData = JSON.parse(localStorage.getItem(authDataKey));
  if (userData && userData.username === username && userData.password === password) {
    userData.isAuthenticated = true;
    localStorage.setItem(authDataKey, JSON.stringify(userData));
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem(authDataKey);
};

const isAuthenticated = () => {
  const userData = JSON.parse(localStorage.getItem(authDataKey));
  return userData && userData.isAuthenticated === true;
};

const authService = {
  register,
  login,
  logout,
  isAuthenticated
};

export default authService;
