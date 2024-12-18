// import axios from 'axios';
import apiClient from './apiClient';  // 如果你使用 axios

const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      credentials: "include", // 包含 cookie
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const loginResponse = await response.json();

    return loginResponse;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

const refresh = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/refresh/", {
      method: "POST",
      credentials: "include", // 包含 cookie
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("refresh error:", error);
    throw error;
  }
};

const logout = async (accessToken) => {
  try {
    const headers = {
      Authorization: `Bearer ${accessToken}`, // 使用 Bearer token
    };
    const response = await fetch("http://localhost:8000/api/logout/", {
      credentials: "include", // 包含 cookie
      method: "POST",
      headers: headers,
    });
    return response;
  } catch (error) {
    console.error("logout error:", error);
    throw error;
  }
};

export { login, refresh, logout };
