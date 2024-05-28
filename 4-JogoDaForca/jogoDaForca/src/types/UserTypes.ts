export type UserDataType = {
  avatar?: string;
  gamesWon?: number;
  gamesLost?: number;
  totalGames?: number;
  precision?: number;
};

export type UserType = Record<string, UserDataType>;

export type UserContextType = {
  currentUser: UserType;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const DEFAULT_USER = {
  Visitante: {
    avatar: "/avatars/svg/avatar-04.svg",
    gamesWon: 0,
    gamesLost: 0,
    totalGames: 0,
    precision: 0,
  }
}