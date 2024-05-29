import { DEFAULT_USER, UserType } from "@/types/UserTypes";

export function setStoredUsers(allUsers: UserType[]): void {
  localStorage.setItem("users", JSON.stringify(allUsers))
}

// Routine to store guest in localStorage
export function initializeUsers(): void {
  const storedUsers = getStoredUsers();
  if (!storedUsers) {
    const initialUser = DEFAULT_USER;
    setStoredUsers([ initialUser ]);
  }
}

// Routine to get Users object from localStorage
export function getStoredUsers(): string | null {
  const storedUsers = localStorage.getItem("users");
  if (!storedUsers) {
    console.log("Failed to get stored users");
  }
  return storedUsers;
}

export function parseStoredUsers(): UserType[] {
  const storedUsers = getStoredUsers();
  if (!storedUsers) return [];
  return JSON.parse(storedUsers);
}

export function isUserStored(username: string): boolean {
  const allUsers = getStoredUsers();
  if (!allUsers) return false;
  return allUsers.includes(username);
}

export function updateStoredUser(newUserData: UserType): void {
  const allUsers = parseStoredUsers();
  if (isUserStored(newUserData.username)) {
    const previousUserData = allUsers.find((user) => user.username === newUserData.username);
    const newUsers = allUsers.map((user) =>
      user.username === newUserData.username ? { ...previousUserData, ...newUserData } : user
    );
    setStoredUsers(newUsers);
  } else {
    const newUser = { ...DEFAULT_USER, ...newUserData };
    allUsers.push(newUser);
    setStoredUsers(allUsers);
  }
}

export function getStoredUser(username: string): UserType | undefined {
  const storedUsers = parseStoredUsers();
  const storedUser = storedUsers?.find((user) => user.username === username);
  return storedUser;
}
