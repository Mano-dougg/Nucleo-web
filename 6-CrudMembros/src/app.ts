import express from 'express';
import { Request, Response } from 'express';
import membro from './Controler/membro';

const app = express();
app.use(express.json());

//Listar todos os usuários
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json('Seja bem-vinde a lista de membros da infoJr:');
});

//Criar usuários
app.post('/criarUsuario', membro.criarUsuario);

//Ler usuário com id especifico
app.get('/usuarioid/:id', membro.usuarioId);

//Ler usuário com email especifico
app.get('/usuarioemail/:email', membro.usuarioEmail);

//Ler usuários com nome especifico
app.get('/usuarionome/:nome', membro.usuarioNome);

//Atualizar usuários por id
app.put('/atualizarusuario/:id', membro.atualizarUsuario);

//Deletar usuários por id
app.delete('/deletarusuario/:id', membro.deleteUsuario);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});