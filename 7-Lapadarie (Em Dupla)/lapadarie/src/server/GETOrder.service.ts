

import { Order, OrderToUse } from '@/types/order.types';
import axios from 'axios';

// ## Funções que farão as requisições do tipo GET:

// ### Função de requisição para pedidos terminados
async function getClosedOrders(): Promise<Order[]> {
    try {
        const response = await axios.get('http://localhost:3000/api/order/closed');
        return response.data as Order[];
    } catch (error: any) {
        console.log(error);
        return [];
    }
}

// ### Função de requisição para pedidos em aberto
async function getOpenOrders (): Promise<Order[]> {
    try {
        const response = await axios.get('http://localhost:3000/api/order/open');
        return response.data as Order[];
    } catch (error: any) {
        console.log(error);
        return [];
    }

} 

// ## Funções para tratar os dados e receber da forma conveniente a ser usada

const getBreadsCount = async (order:Order[]):Promise<number> => {
    let totalBreads = 0;
    order.forEach((order:Order) => {
        order.bread.forEach(bread => {
          totalBreads += bread.quantity;
        });
      });

    return totalBreads;
}

const getBreadsValues = async (order:Order[]):Promise<number> => {
    return order
    .reduce((keep, current) =>(keep+current.total), 0)
}


const getOrderData = (orders:Order[]):OrderToUse[] => {
    return orders.map((order)=>({
        id:order.id,
        name:order.clientName,
        breadCount:order.bread
        .reduce((keep, actual)=>(keep+actual.quantity),0),
        valor:order.total
    }));
}

// ## Pegar dados de pedidos fechados
export async function getSoldBreadsCount() {
    const orders = await getClosedOrders()
    let totalBreads = 0;
    if(orders){
        totalBreads += await getBreadsCount(orders)
    }
    return totalBreads;
    
}

export async function getSoldBreadsValue() {
    
    const orders = await getClosedOrders()
    let totalBreads = 0;
    if(orders){
        totalBreads += await getBreadsValues(orders)
    }
    return totalBreads;
}

// ## Pegar dados de pedidos em aberto


export async function receiveOpenOrders():Promise<OrderToUse[]>{
    const orders = await getOpenOrders();
    const minimizedOrders = getOrderData(orders);
    return minimizedOrders;
}