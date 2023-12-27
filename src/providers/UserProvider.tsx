"use client";

import Login from "@/app/login/page";
import useGetAndSaveToLocalStorage from "@/hooks/getAndSaveToLacal";

import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  user: UserType | null;
  login: (user: UserType) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useGetAndSaveToLocalStorage({
    state: user,
    setState: setUser,
    interval: 200,
    key: "user",
  });

  const login = (user: UserType) => setUser(user);
  const logout = () => setUser(null);
  const value = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      {(user && children) || <Login />}
    </UserContext.Provider>
  );
};

export default UserProvider;
