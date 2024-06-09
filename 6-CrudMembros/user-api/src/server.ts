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

  try{
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
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível criar o usuário (parâmetros inválidos)' });
  }

});


// 2 - rota para retornar usuario por Id
app.get('/users/:id', async(req: Request, res: Response) => {
  const { id } = req.params;

  try{
    const userFound = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (userFound){
      return res.status(200).json(userFound);
    }

    res.status(404).json({ error: 'Id não cadastrado' });
  } catch (error){
    res.status(500).json({ error: 'Id inválido' });
  }
});


// 3 - rota para retornar usuário por email
app.get('/users/email/:email', async(req: Request, res: Response) => {
  const { email } = req.params;

  try{
    const userFound = await prisma.user.findUnique({ where: { email: String(email) } });

    if (userFound){
      return res.status(200).json(userFound);
    }

    res.status(404).json({error: 'Email não cadastrado'})
  } catch (error) {
    res.status(500).json({ error: 'Email inválido' });
  }
})


// 4 - rota para retornar um ou mais usuarios pelo nome
app.get('/users/name/:name', async(req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const usersFound = await prisma.user.findMany({where: {name : String(name) }});

    if (usersFound.length!==0){
      return res.status(200).json(usersFound);
    }

    return res.status(404).json({error: "Nome não cadastrado"});
  } catch (error){
    res.status(500).json({ error: 'Nome inválido' });
  }
})


// 5 - rota para deletar usuário por Id
app.delete('/users/:id', async(req: Request, res: Response) => {
  const { id } = req.params;

  try{
    const userFound = await prisma.user.findUnique({ where: { id: Number ( id ) }});

    if (userFound){
      await prisma.user.delete({ where: { id: Number(id) } });
      return res.status(204).json({});
    }

    return res.status(404).json({ error: "Id não cadastrado" });

  } catch (error){
      res.status(500).json({ error: "Id inválido"});
  }
})


// 6 - rota para atualizar o usuario por Id (não permite caso email já cadastrado)
app.put('/users/:id', async(req: Request, res: Response) => {
  const { id } =  req.params;
  const { name, email , password, age , state , city } = req.body;

  if (!name || !email || !password || !age || !state || !city) {
    return res.status(400).json({error: 'Todos os dados do usuário devem ser preenchidos!'});
  }

  try {
    const userFound =await prisma.user.findUnique({ where:{ id: Number(id)}});

    if (!userFound) {
      return res.status(404).json({ error: 'Id não cadastrado'});
    }

    const emailExists =await prisma.user.findUnique({where: { email}, });

    if (emailExists && emailExists.id != Number(id) ) {
      return res.status(400).json({ error: 'Email já cadastrado!' });
    }

    const  updatedUser= await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email,  password, age,  state, city }
    });

    res.status(200).json(updatedUser);

  } catch (error){

    res.status(500).json({ error: 'Não foi possível atualizar usuário' });
  }

});


app.listen(port, () => {
  console.log(`API rodando na porta: ${port}`);
});



