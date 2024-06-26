import { OrderList, Bread, TreatedBread, TreatedOrder, BreadOrder } from "../utils/dataTypes";
import { db } from "../utils/db.server";

export const treatOrder = (singleOrder:OrderList):TreatedOrder =>{

    let total:number = 0

    const breadData = singleOrder.breadItems
        .map((singleBread)=>{
            const treatedBread = treatBread(singleBread)
            total += treatedBread.total
            return treatedBread
        })

    return {
        id:singleOrder.id,
        clientName:singleOrder.clientName,
        bread:breadData,
        total: total
    }
}

export const treatBread = (singleBread:Bread):TreatedBread =>({
    name:singleBread.name,
    unitaryValue:singleBread.price,
    quantity: singleBread.quantity,
    total: singleBread.price*singleBread.quantity
})

export const treatBreadsAsOrder = async (breadOrders:BreadOrder[]) =>{
    const registeredBreads = await db.bread.findMany({
        where:{
            quantity:0,
            orderId:1
        }
    })
    const registereBreadNames = registeredBreads.map((bread)=>(bread.name))

    if(breadOrders.length===0)throw new Error(`É preciso adicionar pães ao pedido`)
    breadOrders.forEach((bread)=>{
        if(!registereBreadNames.includes(bread.name))throw new Error(`${bread.name} não é um nome de pão registrado`)
        if(bread.quantity===0)throw new Error(`não é possível pedir 0 pães do tipo ${bread.name}`)
    })
}