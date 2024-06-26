import { OrderList, Bread, Order, BreadOrder } from "../utils/dataTypes"
import { db } from "../utils/db.server"



// listar todos os pedidos
export const listOrders = async ():Promise<OrderList[]> => (
    db.orderList.findMany({
        where:{
            id:{not:1}
        },
        select: {
            id:true,
            clientName:true,
            finished:true,
            breadItems:true
        }
    })
)

// listar pedidos que estão fechados ou que estão abertos, dependendo do 'state'
// se state===true então irá retornar todos os pedidos finalizados
// se state===false então irá retornar todos os pedidos não finalizados
export const listSome = async (state:boolean):Promise<OrderList[]> =>(
    db.orderList.findMany({
        where:{
            finished:state,
            id:{not:1}
        },
        select:{
            id:true,
            clientName:true,
            finished:true,
            breadItems:true  
        }
    })
)


// criar um novo pedido.
// essa função so deve ser chamada com argumentos já filtrados.
export const createOrder = async (newOrder:Order) =>{
    const thisCreatedOrder = await db.orderList.create({
        data:{
            clientName:newOrder.clientName
        }
    })

    const id:number = thisCreatedOrder.id

    for(let newBreadOrder of newOrder.breadItems){
        const thisBreadData = await db.bread.findMany({
            where:{
                name:newBreadOrder.name,
                quantity:0,
                orderId:1
            }
        })

         await db.bread.create({
            data:{
                name:newBreadOrder.name,
                quantity:newBreadOrder.quantity,
                price:thisBreadData[0].price,
                orderId:id
            }
        })

    }
    return thisCreatedOrder;
};

// finalizar um pedido
export const finishOrder = async (id:number) =>{
    if(id===1)throw new Error("Id inválido")
    const updatedOrder = await db.orderList.update({
        where:{
            id
        },
        data:{
            finished:true
        }
    })
    if(updatedOrder===null)throw new Error("Id não encontrado")
    return updatedOrder
}

// atualizar um pedido
export const updateOrder = async (id:number, quantity:number[]) =>{
    if(id===1)throw new Error("Id inválido");

    const oldOrders = await db.bread.findMany({
        where:{
            orderId:id
        }
    });

    if(quantity.length!==oldOrders.length)throw new Error("Número de atualizações não equivale ao número de pães pedidos")

     oldOrders.forEach(async (breadOrder, i)=>{
        await db.bread.update({
            where:{
                id:breadOrder.id
            },
            data:{
                quantity: quantity[i]
            }
        })
    })

    return oldOrders
}