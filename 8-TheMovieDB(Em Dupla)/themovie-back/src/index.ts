import { PrismaClient } from '@prisma/client';
import express from 'express';
import axios from 'axios';
import cadastro from './controllers/cadastro';
import login from './controllers/login';
import listarfavs from './controllers/listarFavoritos';
import { authenticateToken } from './middleware/authenticateToken';
import favoritar from './controllers/favoritar';
import { openDb } from './configDB';

openDb()
const app = express();
app.use(express.json());
const PORT = 5000;
const API_KEY = '04c35731a5ee918f014970082a0088b1';
const BASE_URL = 'https://api.themoviedb.org/3';


const prisma = new PrismaClient()

/* Cadastrar Usuario*/
app.post('/cadastro', cadastro.user);

/* LOGIN */
app.post('/login', login.login);

// Rota protegida que requer autenticação
app.get('/protegida', authenticateToken, (req, res) => {
  res.json({ message: 'Rota protegida acessada com sucesso!' });
});

/* FAVORITAR */
app.post('/favorite', authenticateToken, favoritar.addFavorite);


app.get('/listarfavs', listarfavs.favoritos)


app.get('/todos', async (req, res) => {
  const usuario = await prisma.user.findMany();
  try{
    return res.json(usuario)
  }
  catch(error){
  res.status(500).json("Erro")
  }
})


app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        sort_by: 'popularity.desc',
        api_key: API_KEY,
        page: 1
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
