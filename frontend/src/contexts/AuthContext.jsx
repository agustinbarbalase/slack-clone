import { createContext, useState, useEffect } from "react";

const Context = createContext({});

export const AuthContext = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null);

  useEffect(() => {
    if(token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>;
};

export default Context;
