export type UserType = {
  username: string;
  avatar?: string;
  gamesWon: number;
  gamesLost: number;
  totalGames: number;
  precision: number[];
};

export type UserContextType = {
  currentUser: UserType;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const DEFAULT_USER = {
  username: "Visitante",
  avatar: "/avatars/svg/avatar-04.svg",
  gamesWon: 0,
  gamesLost: 0,
  totalGames: 0,
  precision: [],
}