import { createContext, useState, useEffect, useContext } from "react";
import { login, refresh, logout } from "../api/auth";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  //   register: null,
  login: null,
  accessToken: null,
  //   logout: null,
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

        if (response.status === 200) {
          console.log(response.status);
          const data = await response.json();
          const tempPayload = jwtDecode(data.access);
          setIsAuthenticated(true);
          setAccessToken(data.access);
          setPayload(tempPayload);
        } else {
          setIsAuthenticated(false);
          setPayload(null);
        }
        return;
      }
    };
    // checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        isAuthenticated,
        currentMember: payload && {
          id: payload.sub,
          name: payload.name,
        },

        login: async (username, password) => {
          const response = await login(username, password);
          
          console.log(response);
          
          const tempPayload = jwtDecode(response.data);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            console.log('access');
            
            setAccessToken(response.data);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return response;
        },
        refresh: async (username, password) => {
          const data = await refresh();
          console.log(data);

          const tempPayload = jwtDecode(data.access);
          if (tempPayload) {
            setPayload(tempPayload);
            setIsAuthenticated(true);
            setAccessToken(data.access);
          } else {
            setPayload(null);
            setIsAuthenticated(false);
          }
          return data.access;
        },
        logout: async () => {
          const response = await logout(accessToken);
          if (response.status === 200) {
            console.log(response);

            setPayload(null);
            setIsAuthenticated(false);
            setAccessToken("");
          } else {
            console.log('錯誤');
          }
          return response;
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
