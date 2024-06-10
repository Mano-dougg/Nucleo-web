import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv";
import express,{ Request,Response } from "express"

configDotenv()

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());
/* Teste */
app.get('/teste', (req: Request, res: Response) => {
  console.log(req.query)
  res.send({
    teste: 'hello'
  })
});
/* Novo usuario */
app.post('/user', async (req:Request, res:Response) => {
  const usuario = req.body
  const existente = await prisma.user.findUnique({
    where: usuario.email
  })
  if(existente){
    res.send("O email já está cadastrado")
  } else{
      const novoUsuario = await prisma.user.create({
        data: usuario
      })
      res.send("Usuário: " + novoUsuario.nome + "criado com sucesso!");
  }
});
/* Encontrar usuario por ID */
app.get('/user?:id', async (req:Request, res:Response) => {
    const idUsuario = parseInt(req.params.id);
    const usuario = await prisma.user.findUnique({
      where: { id: idUsuario },
    });

    if(usuario){
      res.send(usuario)
    } else {
      res.status(404).send("Usuario nao encontrado")
    }
});
/* Encontrar usuario por email*/
app.get('/user/email', async (req: Request, res: Response) => {
  const emailUsuario = req.body.email;
  const usuario = await prisma.user.findUnique({
    where: {email: emailUsuario}
  });
  if(usuario){
    res.send(usuario)
  } else {
    res.status(404).send("Usuario nao encontrado")
  }
});
/* Encontrar usuario pelo nome */
app.get('/user/email', async (req: Request, res: Response) => {
  const nomeUsuario = req.body.nome;
  const usuario = await prisma.user.findMany({
    where: {nome: nomeUsuario}
  });
  if(usuario){
    res.send(usuario)
  } else {
    res.status(404).send("Usuario nao encontrado")
  }
});

/* Deletar usuario pelo ID */
app.delete('/user/delete' , async (req: Request, res: Response) => {
  const idUsuario = req.body.id;
  const usuario = await prisma.user.findUnique({
    where: {id: idUsuario}
  })
  if(usuario){
    await prisma.user.delete({
      where: {id: idUsuario}  
    }
    )
    res.status(200).send("Usuario: " + idUsuario + "deletado com sucesso.")
  } else{
    res.status(404).send("Usuario nao encontrado")
  }
});
/* Atualizar usuario por ID */  
app.put('user/att?:id', async (req: Request, res : Response) => {
  const usuario = req.body;
  const tempEmail = await prisma.user.findUnique({
    where: {email: usuario.email}
  })
  if(!tempEmail){
    const usuarioAtualizado = await prisma.user.update({
      where: {id: usuario.id},
      data: usuario, 
    })
    res.status(200).send("Usuario: " + usuario.id + "atualizado com sucesso" + "\n" + usuarioAtualizado)
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`); 
});