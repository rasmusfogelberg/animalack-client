import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/auth.service";

/**
 * Declare a provider using a context in React
 *
 * This is responsible for handling authentication with credentials
 * using the authentication service.
 *
 * Should any route in our application require authentication (i.e. login)
 * This provider provides a context that can be accessed in a react component
 * through a hook, to more easily access the current authentication status.
 *
 *
 * TL;DR: We have this to be able to see if there is an authenticated user,
 * if there is - let them go about their business, if not - throw them back to login
 *
 */

interface IAuthContext {
  user: any; // TODO no...
  loading: boolean;
  login: (username: string, password: string, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}

let AuthContext = createContext<IAuthContext>(null!);

// React hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // TODO: type the user object here
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUserFromSessionStorage() {
      const storedUser = sessionStorage.getItem("@animalack:user");

      if (storedUser && !user) {
        setLoading(false);
        setUser(JSON.parse(storedUser));
      }
    }

    loadUserFromSessionStorage();
  });

  const login = (
    username: string,
    password: string,
    callback: VoidFunction
  ) => {
    return authService
      .login(username, password)
      .then((response) => {
        let { jwtToken, ...user } = response;

        setUser(user);

        // Store the user and token in sessionStorage
        sessionStorage.setItem("@animalack:user", JSON.stringify(user));
        sessionStorage.setItem("@animalack:token", JSON.stringify(jwtToken));

        callback();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logout = (callback: VoidFunction) => {
    setUser(null);
    sessionStorage.clear();
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
