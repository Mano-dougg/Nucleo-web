import { db } from "../src/utils/db.server";

type Bread = {
    name: string;
    price: number;
    quantity: number;
    orderId: number;
};

type Order = {
    id: number;
    clientName: string;
    breadItems: Bread[];
    finished: boolean;
};

async function seed(): Promise<void> {

    console.log("Starting seed...")

    // Create OrderList entries first
    const orderExists = await db.orderList.findUnique({
        where:{
            id:1
        }
    })

    const orders = getOrder();
    if(orderExists){
    await Promise.all(
        orders.map(({id, clientName, finished}) => (
            db.orderList.update({
                where:{
                    id:1
                },
                data:{
                    id,
                    clientName,
                    finished
                }
            })
        ))
    )
    } else{
    await Promise.all(
        orders.map(({ id, clientName, finished }) => (
            db.orderList.create({
                data: {
                    id,
                    clientName,
                    finished,
                },
            })
        ))
    )
    }
    console.log("OrderList entries created.");

    // Create Bread entries after OrderList entries
    const breadExists = await db.bread.findUnique({
        where:{
            id:1
        }
    })

    const breads = getBread();
    if(breadExists){
    await Promise.all(
        breads.map((singleBread) => (
            db.bread.update({
                where:{
                    id:1
                },
                data: singleBread
            })
        ))
    );
    } else {
    await Promise.all(
        breads.map((singleBread) => (
            db.bread.create({
                data: singleBread,
            })
        ))
    );  
    }

    console.log("Bread entries created.");

    console.log("Seeding completed.");

    // Verify the data in the database
    const allOrders = await db.orderList.findMany();
    const allBreads = await db.bread.findMany();
    console.log("OrderList in DB:", allOrders);
    console.log("Bread in DB:", allBreads);
}

seed().catch((e) => {
    console.error("Seeding failed: ", e);
}).finally(async () => {
    await db.$disconnect();
});

function getOrder(): Array<Order> {
    return [
        {
            id: 1,
            clientName: 'lapadarie',
            breadItems: [],
            finished: true,
        },
    ];
}

function getBread(): Array<Bread> {
    return [
        {
            name: "pão de sal",
            price: 0.5,
            quantity: 0,
            orderId: 1,
        },
    ];
}
