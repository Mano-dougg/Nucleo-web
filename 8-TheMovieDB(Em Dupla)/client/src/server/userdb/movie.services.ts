import axios from 'axios';

//
async function putAddFavorite (movieId: number, id: string, token: string) {
    const addedMovie = await axios.put(`http://localhost:3001/api/users/${id}/favorite`, 
        {
            id: movieId
        },
    {
        headers:{
            Authorization: token
        }
    })

    return addedMovie
};

async function putAddWatchlist (movieId: number, id: string, token: string) {
    const addedMovie = await axios.put(`http://localhost:3001/api/users/${id}/watchlist`, 
        {
            id: movieId
        },
    {
        headers:{
            Authorization: token
        }
    });

    return addedMovie;
};

async function deleteRemoveWatchlist (movieId: number, id: string, token: string) {
    const addedMovie = await axios.delete(`http://localhost:3001/api/users/${id}/watchlist`, 
        {
            headers:{
                Authorization: token
            },
            data: {
                id: movieId
            }
            
        });

    return addedMovie;
};

// função a ser usada para adicionar e remover filmes da lista de favorito
export async function addFavorite (movieId: number) {
    const id = localStorage.getItem('id')
    if(!id) return;

    const token = localStorage.getItem('token');
    if(!token) return;

    const updatedUser = await putAddFavorite(movieId, id, token);

    return updatedUser;

};

// função a ser usada para adicionar filmes da watchlist
export async function addToWatchList (movieId: number) {
    const id = localStorage.getItem('id')
    if(!id) return;

    const token = localStorage.getItem('token');
    if(!token) return;

    const updatedUser = await putAddWatchlist(movieId, id, token);

    return updatedUser;

};

// função a ser usada para adicionar filmes da watchlist
export async function removeFromWatchList (movieId: number) {
    const id = localStorage.getItem('id')
    if(!id) return;

    const token = localStorage.getItem('token');
    if(!token) return;

    const updatedUser = await deleteRemoveWatchlist(movieId, id, token);

    return updatedUser;
};