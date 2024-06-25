import axios from 'axios';

//
async function putAddFavorite (movieId: number, id: string, token: string) {
    const addedMovie = axios.put(`http://localhost:8080/api/users/${id}/favorite`, 
        {
            id: movieId
        },
    {
        headers:{
            Authorization: token
        }
    })
}

export async function addFavorite (movieId: number) {
    const id = localStorage.getItem('id')
    if(!id) return;

    const token = localStorage.getItem('token');
    if(!token) return;

    const updatedUser = await putAddFavorite(movieId, id, token);

    return updatedUser

}
