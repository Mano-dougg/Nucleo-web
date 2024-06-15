// # Declaração dos tipos de pedidos:

export type Order = {
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