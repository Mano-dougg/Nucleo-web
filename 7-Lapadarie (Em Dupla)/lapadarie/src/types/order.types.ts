// # Declaração dos tipos de pedidos:

import { Bread, BreadSimple } from "./bread.types";

export type Order = {
    id:number;
    clientName: string;
    bread: Bread[]
    total:number
}

export type OrderToUse = {
    id:number;
    name: string;
    breadCount: number;
    valor: number;
}

export type OrderToAdd = {
    clientName:string;
    breadItems:BreadSimple[]
}