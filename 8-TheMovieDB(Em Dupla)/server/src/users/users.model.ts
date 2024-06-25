import { db } from "../utils/db.server";
import { MinimumUpdateParams, MinimumUserParams, movieParams, SearchParams } from "../lib/data-types";
import { User } from "@prisma/client";

export const getAllUser = async ({ name, email }: SearchParams) => {
    const data: SearchParams = {}
    if (name) data.name = name
    if (email) data.email = email

    return await db.user.findMany({
        where:data,
        select:{
            id: true,
            name: true,
            email: true,
            watchList: true,
            whatched: true,
            favorites: true,
            friends:true
        }
    });
};


export const getUserById = async (id: number) => {
    const user = await db.user.findUnique({
        where:{
            id
        },
        select:{
            id: true,
            name: true,
            email: true,
            watchList: true,
            favorites: true
        }
    });

    return user?
    user
    :"Usuário não encontrado";
};


export const addUser = async (data: MinimumUserParams) => {
    const usedEmail = await db.user.findUnique({
        where:{
            email:data.email
        }
    });


    if (!usedEmail) return await db.user.create({
        data
    })
};

// pegar usuário para autenticação
export const getUserAuth = async (where:{email:string}) => {
    return await db.user.findUnique({where})
}

// atualizar dados do usuário no banco de dados
export const updateUser = async (id: number, updateData: MinimumUpdateParams) => {
    if(updateData.email){
        const usedEmail = await db.user.findUnique({
            where:{
                email:updateData.email
            }
        });

        if(usedEmail) return
    }
        
        const update = await db.user.update({
        where: {
            id
        },
        data: updateData
    });

    return update
};

// apagar usuário do banco de dados
export const deleteUser = async (id: number) => {
    
    const user = await db.user.findUnique({
        where:{
            id
        },
        select:{
            friends: true
        }
    })

    if(!user) return {
        result: "error",
        message: "Usuário não encontrado"
    }

    await db.user.update({
        where:{
            id
        },
        data:{
            friends: {
                set: []
            },
            friendOf: {
                set: []
            }
        },
        select: {
            friends: true,
            friendOf:true
        }
    });

    await db.friendRequest.deleteMany({
        where:{
            toId: id
        }
    })

    await db.friendRequest.deleteMany({
        where:{
            fromId: id
        }
    })

    const deleted = await db.user.delete({
        where:{
            id
        }
    })

    return {
        result: "success",
        data: deleted
    }
}

//enviar um pedido de amizade para outro usuário
export const sendFriendRequest = async (fromId: number, toId: number) => {
    const fromUser = await db.user.findUnique({
        where:{
            id:fromId
        }
    });

    if(!fromUser) return {
        result: "error",
        message: "Usuário enviando o pedido não existe"
    };

    const toUser = await db.user.findUnique({
        where:{
            id:toId
        }
    });

    if(!toUser) return {
        result: "error",
        message: "Usuário a receber o pedido não existe"
    };

    const existingRequest = await db.friendRequest.findMany({
        where:{
            fromId,
            toId
        },
        select:{
            status: true
        }
    })

    if(existingRequest.some((request)=>(
            (request.status === "accepted") || (request.status === "pending")
        ))
    ) return {
        result: "error",
        message: "Não é possível fazer um novo pedido de amizade"
    }

    const friendRequest = await db.friendRequest.create({
        data: {
            fromId,
            toId,
            status: "pending"
        }
    });

    return {
        result: "success",
        data: friendRequest
    };
};

// Adicionar id do filme favorito
const addFavorite = async (user: User , userId:number , movieId: number) => {
    const data = await db.user.update({
        where:{
            id:userId
        },
        data:{
            favorites: user.favorites.concat(movieId)
        }
    });

    return {
        result: "success",
        data
    };
};

// Remover id do filme favorito
const removeFavorite = async (user: User, userId:number , movieId: number) => {
    const data = await db.user.update({
        where:{
            id:userId
        },
        data:{
            favorites: user.favorites.filter((favoriteId)=> movieId !== favoriteId )
        }
    });

    return {
        result: "success",
        data
    };
};

// escolher entre adicionar ou remover filme favorito
export const favoriteFilm = async (userId:number , movieId: number) => {
    const user = await db.user.findUnique({
        where:{
            id:userId
        }
    })

    if(!user) return {
        result: "error",
        message: "Usuário não encontrado"
    }

    return user.favorites.includes(movieId)?
    removeFavorite(user, userId, movieId)
    :addFavorite(user, userId, movieId);
};

// adicionar filmes a lista de filmes assistidos
export const rateFilm = async (data: movieParams) => {
    const user = await db.user.findUnique({
        where:{
            id:data.userId
        }
    });

    if(!user) return {
        result: "error",
        message: "Usuário não encontrado"
    }

    const movie = await db.movie.create({
        data
    });

    return {
        result: "success",
        data: movie
    };
};

// remover filme da lista de filmes assistidos
export const removeFilm = async (userId: number, movieInternalId: number) => {
    const user = await db.user.findUnique({
        where:{
            id:userId
        }
    });

    if(!user) return {
        result: "error",
        message: "Usuário não encontrado"
    }

    const movie = await db.movie.findUnique({
        where: {
            id: movieInternalId
        }
    });

    if(!movie) return {
        result: "error",
        message: "Não foi encontrada a avaliação do filme indicada"
    };

    const deleted = await db.movie.delete({
        where:{
            id:movieInternalId
        }
    });

    return deleted?
    {
        result: "success",
        data:deleted
    }
    :{
        result: "error",
        message: "Não foi possível apagar a avaliação"
    };
};

// Adicionar um filme para a watchlist
export const addMovieToWatchList = async (userId: number, movieId: number) => {
    const user = await db.user.findUnique({
        where: { id: userId }
    });

    if (!user) return {
        result: "error",
        message: "Usuário não encontrado"
    };

    const updatedUser = await db.user.update({
        where: { id: userId },
        data: {
            watchList: user.watchList.concat(movieId)
        }
    });

    return {
        result: "success",
        data: updatedUser
    };
};

// Remover um filme da watchlist
export const removeMovieFromWatchList = async (userId: number, movieId: number) => {
    const user = await db.user.findUnique({
        where: { id: userId }
    });

    if (!user) return {
        result: "error",
        message: "Usuário não encontrado"
    };

    const updatedUser = await db.user.update({
        where: { id: userId },
        data: {
            watchList: user.watchList.filter(id => id !== movieId)
        }
    });

    return {
        result: "success",
        data: updatedUser
    };
};