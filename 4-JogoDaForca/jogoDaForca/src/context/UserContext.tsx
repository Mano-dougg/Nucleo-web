import { DEFAULT_USER, UserContextType, UserType } from "@/types/UserTypes";
import { initializeUsers } from "@/utils/useLocalStorage";
import React, { createContext, useState } from "react";

const INITIAL_STATE = {
  currentUser: DEFAULT_USER,
  setCurrentUser: () => { },
};

const UserContext = createContext<UserContextType>(INITIAL_STATE);

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  initializeUsers();

  const [ currentUser, setCurrentUser ] = useState<UserType>(INITIAL_STATE.currentUser);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserContextProvider;
