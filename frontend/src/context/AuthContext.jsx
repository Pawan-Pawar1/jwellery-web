import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/profile`, {
      withCredentials: true,
    })
    .then(res => setUser(res.data.user))
    .catch(() => setUser(null))
    .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};