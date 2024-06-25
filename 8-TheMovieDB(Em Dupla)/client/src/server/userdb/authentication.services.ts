import axios from 'axios';

async function postNewUser (name: string, email: string, password: string) {
    const createdUser = await axios.post('http://localhost:8080/api/users/',
        {
            name, 
            email,
            password
        }
    )
    return createdUser
};

async function postLogin (email: string, password: string) {
    const login = await axios.post('http://localhost:8080/api/users/login',
        {
            email,
            password
        }
    )
    return login
}

async function putUpdate (id: number, {name, email, password}:{
    name?: string,
    email?: string,
    password?: string
}) {

    const data: {
        name?: string,
        email?: string,
        password?: string
    } = {}

    if(name)data.name = name;
    if(email)data.email = email;
    if(password)data.password = password;

    const update = await axios.put(`http://localhost:8080/api/users/${id}`,
        data
    );

    return update
};

// A função abaixo irá cadastrar um novo usuário
export async function createUser (name: string, email: string, password: string) {
    const user = await postNewUser(name, email, password)

    if(!user.data) return;
    if(user.data.result === "error") return user;

    localStorage.setItem('token', user.data.token);
    localStorage.setItem('id', user.data.data.id);

    return user.data
};

// A função abaixo irá fazer o login
export async function loginUser (email: string, password: string) {
    const user = await postLogin(email, password);

    if(!user.data) return;
    if(user.data.result === "error") return user;

    localStorage.setItem('token', user.data.data.token);
    localStorage.setItem('id', user.data.data.id);

    return user.data
}

// A função abaixo irá atualizar o usuário
export async function updateUser (id: number, {name, email, password}:{
    name?: string,
    email?: string,
    password?: string
}) {
    const user = await putUpdate(id, {name, email, password});

    if(!user.data) return;
    if(user.data.result === "error") return user;

    localStorage.setItem('token', user.data.token);
    localStorage.setItem('id', user.data.data.id);

    return user.data
};