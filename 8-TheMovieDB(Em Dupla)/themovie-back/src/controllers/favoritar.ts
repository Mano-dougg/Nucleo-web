// import { Request, Response } from 'express';
// import axios from 'axios';
// import { getSessionToken } from '../utils/tmdb';

// const API_KEY = '04c35731a5ee918f014970082a0088b1';
// const BASE_URL = 'https://api.themoviedb.org/3';

// export default {
//   async addFavorite(req: Request, res: Response) {
//     const { movieId } = req.body;
//     const { user } = req as any; // usando o usuário autenticado do middleware

//     try {
//       // Obtenha o token de sessão
//       const sessionToken = await getSessionToken();

//       const options = {
//         method: 'POST',
//         url: `${BASE_URL}/account/${user.username}/favorite`,
//         headers: {
//           'Authorization': `Bearer ${sessionToken}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         data: {
//           media_type: 'movie',
//           media_id: movieId,
//           favorite: true
//         },
//         params: { api_key: API_KEY }
//       };

//       const response = await axios.request(options);

//       res.status(200).json({ message: 'Filme adicionado aos favoritos com sucesso', data: response.data });
//     } catch (error) {
//       console.error('Erro ao adicionar filme aos favoritos:', error);
//       res.status(500).json({ error: 'Erro ao adicionar filme aos favoritos' });
//     }
//   }
// }

import { PrismaClient } from '@prisma/client';
import {Request, Response } from 'express';

const prisma = new PrismaClient()

export default{


    async favoritar (req: Request, res: Response){
      const {userId, poster_path, title} = req.body;

      const verifica = await prisma.favoritos.findUnique({where: {title}});

      if (verifica) {
        return res.status(400).json({ error: '' });
      }
        try {
          const fav = await prisma.favoritos.create({
            data: {
              userId,
              poster_path,
              title,
            },
          });
          res.status(200).json({ message: 'Usuário cadastrado com sucesso', fav });
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
      }

   
}