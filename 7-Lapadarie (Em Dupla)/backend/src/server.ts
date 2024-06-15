import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import cors from "cors"
const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3003

app.use(express.json());
app.use(cors())

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/line', async (req: Request, res: Response) => {
  const people = await prisma.person.findMany()
  res.send(people)
})

// adicionar pessoa na fila

app.post('/person', async (req: Request, res: Response) => {
  console.log(req.body)
  const {name, bread_total} = req.body
  const person = await prisma.person.create({
    data: 
      {
        name: name,
        bread_total: parseInt(bread_total)
      } 
  })  
  console.log(person)
  
  const dashboard = await prisma.dashboard.findUnique({
    where: 
    {
      id: 1
    }
  }) || {id: 1, people_on_line: 0, breads_sold: 0, revenue: 0}

  const new_people_on_line = dashboard.people_on_line + 1
  const new_breads_sold = dashboard.breads_sold + person.bread_total
  const new_revenue = parseFloat((new_breads_sold * 0.5).toFixed(2))
  
  const updateDashboard = await prisma.dashboard.upsert({
    where: 
    {
      id: 1
    },
    update: 
    {
      people_on_line: new_people_on_line,
      breads_sold: new_breads_sold,
      revenue: new_revenue
    },
    create: 
    {
      id: 1,
      people_on_line: 1,
      breads_sold: person.bread_total,
      revenue: person.bread_total * 0.5
    }
  })

  res.send(
    {
      message: "person added succesfully",
      person: person
    }   
  )

})

// retirar pessoa da fila

app.delete('/remove/:id', async (req: Request, res: Response) => {
//app.delete('/remove', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  console.log(req.body)
  //const myId = req.body.id
  //console.log(myId.body)
  //const id = parseInt(myId) 
  //console.log(id)
  const removePerson = await prisma.person.delete({
    where: {
      id: id
    }
  })
  const dashboard = await prisma.dashboard.findUnique({
    where: 
    {
      id: 1
    }
  }) || {id: 1, people_on_line: 0, breads_sold: 0, revenue: 0}

  const new_people_on_line = dashboard.people_on_line - 1

  const updateDashboard = await prisma.dashboard.update({
    where: 
    {
      id: 1
    },
    data: 
    {
      people_on_line: new_people_on_line 
    },
  })

  res.send(
    {
      message: "person removed from line succesfully",
      person: removePerson
    }   
  )

})

app.get('/dashboard', async (req: Request, res: Response) => {
  const dashboard = await prisma.dashboard.findUnique({
  where: {
    id: 1,
  },
})
  res.send(
    {
      dashboard: dashboard
    }   
  )
})

