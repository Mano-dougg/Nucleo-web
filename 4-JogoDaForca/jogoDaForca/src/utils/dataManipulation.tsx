import { UserType } from "@/types/UserTypes";
import { getStoredUser, updateStoredUser } from "./useLocalStorage";

export function updateUserContext(
  username: string,
  isGameWon: boolean,
  currentPrecision: number,
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>
) {
  const prevUserData = getStoredUser(username);
  if (prevUserData) {
    const newUserData = {
      username: prevUserData.username,
      totalGames: prevUserData.totalGames + 1,
      gamesWon: isGameWon ? prevUserData.gamesWon + 1 : prevUserData.gamesWon,
      gamesLost: isGameWon ? prevUserData.gamesLost : prevUserData.gamesLost + 1,
      precision: [...prevUserData.precision, currentPrecision],
    };
    updateStoredUser(newUserData);
    const currentUserData = getStoredUser(username);
    if (!currentUserData) throw new Error("User data not found");
    setCurrentUser(currentUserData);
  }
}