

export type SearchParams = {
    name?: string,
    email?: string
}

export type NonTreatedParams = {
    name?:any;
    email?:any;
    password?:any;    
}


export type MinimumUserParams = {
    name:string;
    email:string;
    password:string;
}

export type MinimumUpdateParams = {
    name?:string;
    email?:string;
    password?:string;    
}

export type movieParams = {
    userId: number;
    movieId: number;
    userRating: number;
}