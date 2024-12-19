// import axios from 'axios';

const login = async (phone, password) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/auth/login", {
      method: "POST",
      credentials: "include", // 包含 cookie
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, password }),
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
    const response = await fetch("http://localhost:8000/api/v1/auth/refresh", {
      method: "GET",
      credentials: "include", // 包含 cookie
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    console.log('responseresponseresponse:',response);
    
    const loginResponse = await response.json();

    return loginResponse;
  } catch (error) {
    console.error("refresh error:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    // const headers = {
    //   Authorization: `Bearer ${accessToken}`, // 使用 Bearer token
    // };    
    const response = await fetch("http://localhost:8000/api/v1/auth/logout", {
      credentials: "include", // 包含 cookie
      method: "POST",
      // headers: headers,
    });
    console.log('logout',response);
    return response;
    
  } catch (error) {
    console.error("logout error:", error);
    throw error;
  }
};

export { login, refresh, logout };
