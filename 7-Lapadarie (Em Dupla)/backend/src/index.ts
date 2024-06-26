import * as dotenv from 'dotenv';
import express from "express";
import cors from "cors";

import { breadRouter } from './bread/bread.router';
import { orderRouter } from './order/order.router';

dotenv.config();

if(!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/order", orderRouter);
app.use("/api/bread", breadRouter);
app.listen(PORT, ()=>{
    console.log(`working on port:${PORT}`)
});