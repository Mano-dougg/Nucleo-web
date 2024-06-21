import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3002"

})

export class User{

    listarall(){
        return axiosInstance.get('/banco')
    }
}

export class Postar{

    Criar(){
        return axiosInstance.post('/usuarios')
    }
    
}