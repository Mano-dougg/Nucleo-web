

import axios from 'axios';

type Order = {
    id:number;
    clientName: string;
    bread: {
        name: string;
        unitaryValue:number;
        quantity: number;
        total:number;
    }[]
    total:number
}

export type OrderToUse = {
    name: string;
    breadCount: number;
    valor: number;
}

const getBreadsCount = async (order:Order[]):Promise<number> => {
    let totalBreads = 0;
    order.forEach((order:Order) => {
        order.bread.forEach(bread => {
          totalBreads += bread.quantity;
        });
      });

    return totalBreads;
}


const getOrderData = (orders:Order[]):OrderToUse[] => {
    return orders.map((order)=>({
        name:order.clientName,
        breadCount:order.bread
        .reduce((keep, actual)=>(keep+actual.quantity),0),
        valor:order.total
    }));
}

// Pegar pedidos fechados

async function getClosedOrders(): Promise<Order[]> {
    try {
        const response = await axios.get('http://localhost:3000/api/order/closed');
        return response.data as Order[];
    } catch (error: any) {
        console.log(error);
        return [];
    }
}

export async function getSoldBreadsCount() {
    const orders = await getClosedOrders()
    let totalBreads = 0;
    if(orders){
        totalBreads += await getBreadsCount(orders)
    }
    return totalBreads;
    
}

// Pegar pedidos em aberto

async function getOpenOrders (): Promise<Order[]> {
    try {
        const response = await axios.get('http://localhost:3000/api/order/open');
        return response.data as Order[];
    } catch (error: any) {
        console.log(error);
        return [];
    }

} 

export async function receiveOpenOrders():Promise<OrderToUse[]>{
    const orders = await getOpenOrders();
    const minimizedOrders = getOrderData(orders);
    return minimizedOrders;
}