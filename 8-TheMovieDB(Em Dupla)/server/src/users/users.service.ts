
import { MinimumUserParams, NonTreatedParams, SearchParams } from '../lib/data-types'
import { setDataToUpdate, validateEmail } from '../lib/data-validation'
import * as userModels from './users.model'

export const getAllUser = async (name:any, email:any) => {
    const params: SearchParams = {}

    if (typeof name === 'string') params.name = name 
    if (typeof email === 'string') {if(validateEmail(email)) params.email = email}

    return await userModels.getAllUser(params)
}

export const getUser = async (id: any) => {
    return await userModels.getUserById(parseInt(id, 10))
}

export const addUser = async ({ name, email, password }: NonTreatedParams) => {

    if(!(typeof name === 'string')) return {
        result: "error",
        message: "Parametro nome deveria ser algum tipo de texto"
    };

    if(!(typeof email === 'string')) return {
            result: "error",
            message: "Parametro email deveria ser algum tipo de texto"
        }
    else if (!validateEmail(email)) return {
        result: "error",
        message: "Parametro email deveria ser algum endereço de email válido."
    };

    if(!(typeof password === 'string')) return {
        result: "error",
        message: "Parametro password deveria ser um tipo de texto válido"
    }

    const newUser = await userModels.addUser({ name, email, password })
    
    return newUser? 
    {
        result: "success",
        data: newUser
    }
    :{
        result: "error",
        message: "Endereço de email já cadastrado."
    }
}

export const updateUser = async(id:number, data: NonTreatedParams) =>{
    
    const updateData = setDataToUpdate(data);

    if (!Object.keys(updateData).length) return {
        result: "error",
        message: "Nenhum dado a ser atualizado encontrado"
    }

    for(let key in updateData){
        //@ts-ignore
        if(typeof updateData[key] !== 'string') return {
            result: "error",
            message: `A propriedade ${key} precisa ser um tipo de texto válido`
        }
        if(key === "email"){
            if(!validateEmail(updateData[key])) return {
                result: "error",
                message: "Parametro email deveria ser algum endereço de email válido."
            }
        }
    }

    const updated = await userModels.updateUser(id, data);

    return updated?
    {
        result: "success",
        data: updated
    }
    :{
        result: "error",
        message: "Email já cadastrado"
    };
};

// apagar um usuário
export const deleteUser = async (id:string) => {
    return userModels.deleteUser(parseInt(id, 10))
}

// filtrar os dados para requisição de amizade
export const requestFriendship = async (fromId: string, toId: string) => {
    if (fromId === toId) return{
        result: "error",
        message: "Um usuário não pode ser amigo de si mesmo. Os ids fornecidos são idênticos"
    };

    return userModels.sendFriendRequest(parseInt(fromId, 10), parseInt(toId, 10))
}

// favoritar ou desfavoritar um filme
export const favoriteFilm =  async (userId:any, movieId:any) => {
    return userModels.favoriteFilm(parseInt(userId, 10), parseInt(movieId, 10))
}

// checa os dados a serem adicionados a lista de filmes assistidos de um usuário
export const watchFilm = async (userId:any, movieId:any, userRating:any) => {
    const result = await userModels.rateFilm({
        userId: parseInt(userId, 10), 
        movieId: parseInt(movieId, 10), 
        userRating: userRating ? parseInt(userRating, 10) : -1 
    });

    // caso seja adicionado o filme para a lista de filmes assistidos, o sistema
    // irá checar se o filme estava na watchlist, e removê-lo caso esteja.
    if (result.result === "success") {
        await userModels.removeMovieFromWatchList(parseInt(userId, 10), parseInt(movieId, 10));
    }

    return result;
};

// deleta um filme adicionado à lista de assistidos
export const deleteWatchedMovie = async (userId: string, movieInternalId: string) => {
    return userModels.removeFilm(parseInt(userId, 10), parseInt(movieInternalId, 10))
}

// adicionar um filme para a watchList
export const addMovieToWatchList = async (userId: any, movieId: any) => {
    return userModels.addMovieToWatchList(parseInt(userId, 10), parseInt(movieId, 10));
}

// remover um filme da watchList
export const deletMovieFromWatchList = async (userId: any, movieId: any) => {
    return userModels.removeMovieFromWatchList(parseInt(userId, 10), parseInt(movieId, 10));
}