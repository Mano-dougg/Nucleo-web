import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

// 1 - rota para criar usuario (não permite criação de usuario caso email já cadastrado)
app.post('/users', async (req: Request, res: Response) => {
  const { name, email, password, age, state, city } = req.body;

  if (!name || !email || !password || !age || !state || !city) {
    return res.status(400).json({ error: 'Todos os dados do usuário devem ser preenchidos!' });
  }

  const emailExists = await prisma.user.findUnique({where: { email }, });

  if (emailExists) {
    return res.status(400).json({ error: 'Email já cadastrado!' });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      age,
      state,
      city,
    },
  });

  res.status(201).json(user);
});

// 2 - rota para retornar usuario por Id
app.get('/users', async(req: Request, res: Response) => {
  const { id } = req.query;

  const userFound = await prisma.user.findUnique({ where: { id: Number(id) } });

  if (userFound){
    return res.status(200).json(userFound);
  }

  res.status(404).json({ error: 'Id não cadastrado' });
  
})

// 3 - rota para retornar usuário por email
app.get('/users/email', async(req: Request, res: Response) => {
  const { email } = req.query;

  const userFound = await prisma.user.findUnique({ where: { email: String(email) } });

  if (userFound){
    return res.status(200).json(userFound);
  }

  res.status(404).json({error: 'Email não cadastrado'})

})

// 4 - rota para retornar um ou mais usuarios pelo nome
app.get('/users/name', async(req: Request, res: Response) => {
  const { name } = req.query;

  const usersFound = await prisma.user.findMany({where: {name : String(name) }});

  if (usersFound){
    return res.status(200).json(usersFound);
  }

  return res.status(404).json({error: "Nome não cadastrado"});
})

// 5 - rota para deletar usuário por Id
app.delete('/users/id', async(req: Request, res: Response) => {
  const { id } = req.query;

  const userFound = await prisma.user.findUnique({ where: { id: Number ( id ) }});

  if (userFound){
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(204).send();
  }

  return res.status(404).json({error: "Id não cadastrado"})
})

// 6 - rota para atualizar o usuario por Id (não permite caso email já cadastrado)
app.put('/users/update', async(req: Request, res: Response) => {
  const { id } = req.query;
  const { name, email, password, age, state, city } = req.body;

  const userFound = await prisma.user.findUnique({ where: { id: Number(id) } });

  if (!name || !email || !password || !age || !state || !city) {
    return res.status(400).json({ error: 'Todos os dados do usuário devem ser preenchidos!' });
  }
  
  if (!userFound) {
    return res.status(404).json({ error: 'Id não cadastrado' });
  }

  const emailExists = await prisma.user.findUnique({where: { email }, });

  if (emailExists && emailExists.id != Number(id) ) {
    return res.status(400).json({ error: 'Email já cadastrado!' });
  }

  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email, password, age, state, city }
  });

  res.status(200).json(updatedUser);

});

app.listen(port, () => {
  console.log(`API rodando na porta: ${port}`);
});

