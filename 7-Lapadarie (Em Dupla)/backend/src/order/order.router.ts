import express from "express";
import type { Request, Response } from "express";

import * as OrderService from "./order.service";
import { Prisma } from "@prisma/client";
import { treatBread, treatBreadsAsOrder, treatOrder } from "./orderTreatment";
import { body, validationResult } from "express-validator";
import { Order } from "../utils/dataTypes";

export const orderRouter = express.Router();

// GET: pegar uma lista de todos os pedidos

orderRouter.get("/",
    async (request: Request, response: Response) =>{
        try{
            const order = await OrderService.listOrders();

            const treatedOrder = order.map(treatOrder)

            return response.status(200).json(treatedOrder);
        } catch (error: any){
            return response.status(500).json(error)
        }
    }
)

// GET: pegar uma lista de todos os pedidos em aberto

orderRouter.get("/open",
    async (request: Request, response: Response) =>{
        try{
            const order = await OrderService.listSome(false);

            const treatedOrder = order.map(treatOrder)

            return response.status(200).json(treatedOrder);
        } catch (error: any){
            return response.status(500).json(error)
        }
    }
)

// GET: pegar uma lista de todos os pedidos fechados

orderRouter.get("/closed",
    async (request: Request, response: Response) =>{
        try{
            const order = await OrderService.listSome(true);

            const treatedOrder = order.map(treatOrder)

            return response.status(200).json(treatedOrder);
        } catch (error: any){
            return response.status(500).json(error)
        }
    }
)

// POST: adiciona um novo pedido a lista

orderRouter.post("/",
    body("clientName").isString().withMessage("Name must be a string"),
    async (request: Request, response: Response)=>{

        const errors = validationResult(request);
        if(!errors.isEmpty()) {
            return response.status(400).json({
                errors: errors
            });
        };

        try{
            const body: any = request.body;
            // Check if the name property exists and is a string
            if (typeof body.clientName !== 'string') {
              return response.status(400).json({ error: 'Propriedade "name" é inválida ou não existe' });
            }
            // Check if the breads property exists and is an array
            if (!Array.isArray(body.breadItems)) {
              return response.status(400).json({ error: 'Propriedade "breads" é inválida ou não existe' });
            }
            // Check if each element in the breads array is an object with required properties
            for (const bread of body.breadItems) {
              if (typeof bread.name !== 'string' || typeof bread.quantity !== 'number') {
                return response.status(400).json({ error: 'Items dentro da propriedade "breads" não possuem as propriedades necessárias' });
              }
            }
            const { clientName, breadItems } = body as Order;
            treatBreadsAsOrder(breadItems);

            const newOrder = await OrderService.createOrder({clientName, breadItems})
            return response.status(201).json(newOrder);

        
        } catch(error){
            return response.status(400).json(error)
        }

    }
)

// PUT: finaliza um pedido
orderRouter.put("/finish/:id",
    async (request: Request, response: Response) =>{
        try{
            const id: number = parseInt(request.params.id, 10)
            const updatedOrder = await OrderService.finishOrder(id)
            return response.status(200).json(updatedOrder)
        } catch(error:any){
            return response.status(500).json(error.message);
        }
    }
)