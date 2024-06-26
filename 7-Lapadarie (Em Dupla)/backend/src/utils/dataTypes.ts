

export type OrderList = {
    id: number;
    clientName: string;
    finished: boolean;
    breadItems: Bread[];
}

export type TreatedOrder = {
    id: number;
    clientName: string;
    bread: TreatedBread[];
    total: number;
}

export type Order = {
    clientName: string;
    breadItems: BreadOrder[];
}

export type Bread = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    orderId: number;
}

export type TreatedBread = {
    name: string;
    unitaryValue: number;
    quantity: number;
    total: number;
}

export type BreadOrder = {
    name: string;
    quantity: number;
}
