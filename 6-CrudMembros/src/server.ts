import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv";
import express,{ Request,Response } from "express"

configDotenv()

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/teste', (req: Request, res: Response) => {
  console.log(req.query)
  res.send({
    teste: 'hello'
  })
})

app.post('/user', async (req:Request, res:Response) => {
  const user = await prisma.user.create({
    data: {
      nome: 'Matheus',
      email:  'matheus@info.br',
      idade: 22
    }
  })
  res.send(user);
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});