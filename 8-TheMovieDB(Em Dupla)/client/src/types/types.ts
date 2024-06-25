export type Movie = {
    id: number;
    title: string;
    overview: string;
    backdropPath: string;
    vote_average: number;
}

export type User = {
    "id": number,
    "name": string,
    "email": string,
    "watchList": number[],
    "favorites": number[]
  }