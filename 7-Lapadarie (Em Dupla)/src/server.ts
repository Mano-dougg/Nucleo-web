import express from "express";
import { PrismaClient } from "@prisma/client/edge";


const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Get people, breads and cost
app.get('/', async (req, res) => {
  try {
    const people_count = await prisma.sales.count();

    // const breads = await prisma.sales.fields.breads_qt;
    // const costs = await prisma.sales.fields.cost;
    
    res.json(people_count)
    console.log(people_count);
    // console.log(breads);
    // console.log(costs);
    
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while counting people' });
    
  }
});
