import { DEFAULT_USER, UserContextType, UserType } from "@/types/UserTypes";
import { getStoredUser, initializeUsers } from "@/utils/useLocalStorage";
import React, { createContext, useState } from "react";

function getInitialState() {
  initializeUsers();
  const guestUser = getStoredUser("Visitante");
  return {
    currentUser: guestUser ? guestUser : DEFAULT_USER,
    setCurrentUser: () => { },
  }
}

const initialState = getInitialState();

const UserContext = createContext<UserContextType>(initialState);

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState<UserType>(initialState.currentUser);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserContextProvider;
