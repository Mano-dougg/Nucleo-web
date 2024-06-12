import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3002"
})

export class User{

    listarall(){
        return axiosInstance.get('/usuarios')
    }
}

export class Totais{

    criacao(){
        return axiosInstance.get('/totais')
    }
    
}