import { DEFAULT_USER, UserType } from "@/types/UserTypes";

export function setStoredUsers(allUsers: UserType): void {
  localStorage.setItem("users", JSON.stringify(allUsers))
}

// Routine to store guest in localStorage
export function initializeUsers(): void {
  const storedUsers = getStoredUsers();
  if (!storedUsers) {
    const initialUser = DEFAULT_USER;
    setStoredUsers(initialUser);
  }
}

// Routine to get Users object from localStorage
export function getStoredUsers(): string {
  const storedUsers = localStorage.getItem("users");
  if (!storedUsers) {
    throw new Error("Failed to get stored users")
  }
  return storedUsers;
}

export function parseStoredUsers(storedUsers: string): UserType {
  return JSON.parse(storedUsers);
}

export function isUserStored(username: string): boolean {
  const allUsers = getStoredUsers();
  return allUsers.includes(username);
}

export function setNewUser(username: string, avatar: string, allUsers: UserType): void {
  const previousUsers = allUsers;
  if (isUserStored(username)) {
    const previousUserData = allUsers[username];
    delete allUsers[username];
    const newUsers = Object.assign({[username]: {...previousUserData, avatar: avatar}}, previousUsers);
    setStoredUsers(newUsers);
  } else {
    const newUsers = Object.assign({[username]: {...DEFAULT_USER["Visitante"], avatar}}, previousUsers);
    setStoredUsers(newUsers);
  }
}
