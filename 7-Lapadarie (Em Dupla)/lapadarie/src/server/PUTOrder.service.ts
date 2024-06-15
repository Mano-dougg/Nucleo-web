import axios from "axios"


export const finishOrder = async (id:number)=>{
    const response = await axios.put("http://localhost:3000/api/order/finish/"+id);
    return response
}