import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001"

})

export class User{

    listarall(){
        return axiosInstance.get('/usuarios')
    }
}

export class Totais{

    totasss(){
        return axiosInstance.get('/totais')
    }
}