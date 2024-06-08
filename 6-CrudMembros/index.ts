import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {configDotenv} from "dotenv"
import type { Request, Response } from "express"
import { PrismaClient } from '@prisma/client';

configDotenv()

const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3000

// rota de retornar todos os usuarios GET
app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany() 
  res.send(users)
})


// POST criar usuario
app.post('/user', async (req: Request, res: Response) => {
  
  const email = typeof(req.query.email) == 'string' ? req.query.email : 'email'
  const name = typeof(req.query.name) == 'string' ? req.query.name : 'name'
  const password = typeof(req.query.password) == 'string' ? req.query.password : 'password'
  const city = typeof(req.query.city) == 'string' ? req.query.city : 'city'
  const state = typeof(req.query.state) == 'string' ? req.query.state : 'state'
  const age = typeof(req.query.age) == 'string' ? parseInt(req.query.age) : 0

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      age: age,  
      password: password,
      city: city,
      state: state
    },
  }) 
  console.log(user)
  res.send(user)
})

// GET usuario por id
app.get('/user/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  })
  res.send(user)
})

// DELETE usuario por id
app.delete('/user/:id/delete', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const deleteUser = await prisma.user.delete({
    where: {
     id: id,
    },
  })
  res.send(deleteUser)
})

// PUT usuario por id
app.put('/user/:id/update', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const email = typeof(req.query.email) == 'string' ? req.query.email : 'email'
  const name = typeof(req.query.name) == 'string' ? req.query.name : 'name'
  const password = typeof(req.query.password) == 'string' ? req.query.password : 'password'
  const city = typeof(req.query.city) == 'string' ? req.query.city : 'city'
  const state = typeof(req.query.state) == 'string' ? req.query.state : 'state'
  const age = typeof(req.query.age) == 'string' ? parseInt(req.query.age) : 0

  const updateUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      email: email, 
      name: name,
      password: password,
      city: city,
      state: state,
      age: age,
    }
  })
  res.send(updateUser)
})

// GET usuario por email
app.get('/user/email/:email', async (req: Request, res: Response) => {
  const email = req.params.email
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  res.send(user)
})

// GET usuarios por nome
app.get('/user/name/:name', async (req: Request, res: Response) => {
  const name = req.params.name
  const user = await prisma.user.findMany({
    where: {
      name: name,
    },
  })
  res.send(user)
})

app.get('/test', (req: Request, res: Response) => {
  console.log(req.query)
  res.send(
    {  
     data: 'Hello World!'
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})