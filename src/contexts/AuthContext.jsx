import { createContext, useState, useEffect, useContext } from "react";
import { login, refresh, logout, register } from "../api/auth";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  refresh: null,
  login: null,
  accessToken: null,
  logout: null,
  register: null,
};
const AuthContext = createContext(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const checkTokenIsValid = async () => {
      if (!accessToken) {
        const response = await refresh();
        if (response.success === true) {
          const tempPayload = jwtDecode(response.data.accessToken);
          setPayload(tempPayload);
          setIsAuthenticated(true);
          setAccessToken(response.data.accessToken);
        } else {
          setPayload(null);
          setIsAuthenticated(false);
        }
        return
      }
    };
    checkTokenIsValid();

  }, [pathname, accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        isAuthenticated,
        currentMember: payload && {
          id: payload.id,
          name: payload.name,
        },

        login: async (phone, password) => {
          const response = await login(phone, password);
          // const loginResponse = await response.json();
          if (response.success === true) {
            // console.log(response.data.accessToken);

            const tempPayload = jwtDecode(response.data.accessToken);
            // console.log(tempPayload); 
            setPayload(tempPayload);
            setIsAuthenticated(true);
            setAccessToken(response.data.accessToken);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return response;
        },
        refresh: async () => {
          const response = await refresh();
          console.log(response);

          if (response.success === true) {
            const tempPayload = jwtDecode(response.data.accessToken);
            setPayload(tempPayload);
            setIsAuthenticated(true);
            setAccessToken(response.data.accessToken);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return response.data.accessToken;
        },
        logout: async () => {
          const response = await logout();
          if (response.status === 200) {
            // console.log(response);

            setPayload(null);
            setIsAuthenticated(false);
            setAccessToken("");
          } else {
            console.log('錯誤');
          }
          return response;
        },
        register: async (registerData) => {
          const response = await register(registerData);
          console.log('auth response', response);

          if (response.success === true & !response.errors) {
            const tempPayload = jwtDecode(response.data.accessToken);
            setPayload(tempPayload);
            setIsAuthenticated(true);
            setAccessToken(response.data.accessToken);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return response;
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
