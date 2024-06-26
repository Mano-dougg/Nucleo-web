import axios from "axios"


export const finishOrder = async (id:number)=>{
    const response = await axios.put("http://localhost:3000/api/order/finish/"+id);
    return response
}

export const updateOrder = async (id:number, quantity:number[])=>{
    console.log('oi')
    const data = {
        quantity:quantity
    }
    const response = await axios.put("http://localhost:3000/api/order/"+id, data);
    return response
}