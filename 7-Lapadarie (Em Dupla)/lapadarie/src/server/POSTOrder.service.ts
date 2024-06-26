
import { OrderToAdd } from "@/types/order.types";
import axios from "axios";

// ## Funções para fazer as requisições do tipo POST:

export const postOrder = async (data:OrderToAdd)=>{
    const response = await axios.post('http://localhost:3000/api/order', data)
    return response
}