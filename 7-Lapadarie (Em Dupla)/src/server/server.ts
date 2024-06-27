import express from "express";
import { PrismaClient } from "@prisma/client/edge";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Get people count, total breads sold, and total cost
app.get('/', async (req, res) => {
  try {
    const people_count = await prisma.sales.count();

    const total_breads = await prisma.sales.aggregate({
      _sum: {
        breads_qt: true,
      },
    });

    const total_cost = await prisma.sales.aggregate({
      _sum: {
        cost: true,
      },
    });

    return res.status(200).json({
      total_people: people_count,
      total_breads: total_breads._sum.breads_qt,
      total_cost: total_cost._sum.cost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving data' });
  }
});

app.get('/add-person', async (req, res) => {

  const { name:string, breads:number } = req.body;
  if( !(name || breads) )
    return res.status(400).json({ error: "missing arguments"})

  const cost:number = breads * 0.5;

  const addPerson = await prisma.sales.create({
    data: {
      client_name: name,
      breads_qt: breads,
      cost: cost
    }
  });

  return res.status(201).json({
    "response": "person added to queue"
  })
});




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});