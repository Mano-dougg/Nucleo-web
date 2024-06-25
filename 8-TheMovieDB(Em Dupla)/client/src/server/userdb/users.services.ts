import axios from 'axios';

async function getUserById (id:number, auth: string) {

    const user = await axios.get(`http://localhost:3001/api/users/${id}`,
        {
            headers:{
                Authorization: auth
            }
        }
    )

    return user
};

// função deve ser chamada em todos os locais que será verificado se o usuário
// está logado. não retornará nada se o usuário não estiver logado.
export async function getLoggedUser ():Promise<void | {
    "id": number,
    "name": string,
    "email": string,
    "watchList": number[],
    "favorites": number[]
}> {
    const id = localStorage.getItem('id');
    if (!id) return;
    
    const auth = localStorage.getItem('token')
    if (!auth) return;

    const response = await getUserById(parseInt(id), auth)
    return response.data
}