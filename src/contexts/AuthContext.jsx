import { createContext, useContext, useEffect, useState } from "react";
import { getUserProfile } from "../api/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const result = await getUserProfile();
      if (result.success) {
        setUser(result.data.username);
      } else {
        setUser(null);
      }
    }

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
