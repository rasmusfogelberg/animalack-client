import React, { createContext, useContext, useState } from "react";
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

  const login = (username: string, password: string, callback: VoidFunction) => {
    return authService
      .login(username, password)
      .then((user) => {
        setUser(user);
        callback();
      })
      .catch((error) => {
        // TODO: handle this properly
        console.error(error);
      });
  };

  const logout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  }

  let value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}