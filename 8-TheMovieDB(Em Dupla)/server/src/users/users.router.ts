import express, { Request, Response } from 'express';

import * as userService from './users.service';
import { body } from 'express-validator';
import { authenticateToken, testAuth } from '../lib/authentication';

export const userRouter = express.Router();

// GET: pegar uma lista com todos os usuários
userRouter.get("/",
    authenticateToken,
    async (request: Request, response:Response) => {
        const { name, email } = request.query;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {email})
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const result = await userService.getAllUser(name, email)
            
            return response.status(200).json(result)
        } catch (error:any){
            return response.status(500).json(error);
        };
    }
);

// GET: pegar um usuário por id
userRouter.get("/:id",
    authenticateToken,
    async (request: Request, response:Response) => {
        const { id } = request.params;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id})
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const result = await userService.getUser(id)
            if(result === "Usuário não encontrado") return response.status(404).json({
                result: "error",
                message: result
            });
            return response.status(200).json(result);
        } catch (error:any){
            return response.status(500).json({
                result: "error",
                message: error
            });
        };
    }
);

// POST: adicionar novo usuário
userRouter.post("/",
    body("name").isString().withMessage("Propriedade 'name' deve ser um nome válido"),
    body("email").isEmail().withMessage("Propriedade 'email' deve ser um endereço de email válido."),
    body("password").isString().withMessage("Propriedade 'password' deve ser um endereço de email válido."),
    async (request: Request, response: Response) => {
        // pegar os dados do body da requisição
        const { name, email, password } = request.body;
        try{
            const newUser = await userService.addUser({ name, email, password})
            if (!newUser) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu criar o usuário"
            })

            if (newUser.result === "error") return response.status(401).json(newUser)
            
            return response.status(201).json(newUser)
        } catch (error:any){
            return response.status(500).json(error)
        }
    }
    
);

// POST: fazer o login do usuário
userRouter.post('/login',
    body('email').isEmail().withMessage("Propriedade 'email' deve ser um endereço de email válido."),
    body('password').isString().withMessage("Propriedade 'password' deve ser uma senha válida."),
    async (req: Request, res: Response) => {
      const { email, password } = req.body;
      try {
        const token = await userService.authenticateUser(email, password);
        if (!token) return res.status(401).json({ message: 'Não foi possível autenticar o usuário'});
        if (token.message) return res.status(401).json(token)

        res.status(200).json(token);
      } catch (error: any) {
        res.status(500).json(error);
      }
    }
  );

// PUT: atualizar nome, email, ou senha de um usuário
userRouter.put("/:id",
    authenticateToken,
    async (request: Request, response: Response) => {
        const { name, email, password } = request.body;
        const { id } = request.params;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id})
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const newUser = await userService.updateUser(parseInt(id, 10), { name, email, password});
            if (!newUser) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu atualizar o usuário"
            });

            if (newUser.result === "error") return response.status(401).json(newUser);
            
            return response.status(202).json(newUser);
        } catch (error:any){
            return response.status(500).json(error);
        };
    }
);

// DELETE: deletar um usuário
userRouter.delete("/:id",
    authenticateToken,
    async (request: Request, response: Response) => {
        const { id } = request.params;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id})
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const newUser = await userService.deleteUser(id);
            if (!newUser) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu atualizar o usuário"
            });

            if (newUser.result === "error") return response.status(401).json(newUser);
            
            return response.status(202).json(newUser);
        } catch (error:any){
            return response.status(500).json(error);
        };
    }
);

// POST: fazer pedido de amizade
userRouter.post("/:id/friendship",
    authenticateToken,
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação de outro usuário"),
    async (request: Request, response: Response) => {
        const fromId = request.params.id;
        const { id: toId} = request.body;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id:fromId})
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const result = await userService.requestFriendship(fromId, toId);

            if (!result) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu criar o pedido de amizade"
            });

            if (result.result === "error") return response.status(400).json(result);

            return response.status(200).json(result)
        } catch (error: any) {
            response.status(500).json(error);
        }
    }
)

// PUT: Favoritar um filme
userRouter.put("/:id/favorite",
    authenticateToken,
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação de outro usuário"),
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const { id: movieId } = request.body;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id:userId})
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const result = await userService.favoriteFilm(userId, movieId);

            if (!result) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu atualizar o usuário"
            });

            if (result.result === "error") return response.status(400).json(result);

            return response.status(200).json(result)
        } catch (error: any) {
            response.status(500).json(error);
        }
    }
)

// POST: adicionar um filme a lista de assistidos
userRouter.post("/:id/watched",
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação de outro usuário"),
    body("rating").isNumeric().withMessage("O parâmetro 'rating' deve ser um número entre 0 e 10"),
    authenticateToken,
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const { id: movieId, rating } = request.body;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id:userId});
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const result = await userService.watchFilm(userId, movieId, rating);

            if (!result) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu atualizar o usuário"
            });

            if (result.result === "error") return response.status(400).json(result);

            return response.status(200).json(result);
        } catch (error: any) {
            response.status(500).json(error);
        };
    }
);

// DELETE: remove um filme da lista de assistidos
userRouter.delete("/:id/watched/:movieId",
    authenticateToken,
    async (request: Request, response: Response) => {
        const { id, movieId } = request.params;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id})
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const newUser = await userService.deleteWatchedMovie(id, movieId);
            if (!newUser) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu atualizar o usuário"
            });

            if (newUser.result === "error") return response.status(401).json(newUser);
            
            return response.status(202).json(newUser);
        } catch (error:any){
            return response.status(500).json(error);
        };
    }
);

// POST:adicionar um filme para a watchlist
userRouter.put("/:id/watchlist",
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação do filme"),
    authenticateToken,
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const movieId = request.body.id;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id:userId});
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const result = await userService.addMovieToWatchList(userId, movieId);

            if (!result) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu adicionar o filme a lista"
            });

            if (result.result === "error") return response.status(400).json(result);

            return response.status(200).json(result)
        } catch (error: any) {
            response.status(500).json(error);
        }
    }
);

// DELETE:remover um filme da watchlist
userRouter.delete("/:id/watchlist",
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação do filme"),
    authenticateToken,
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const movieId = request.body.id;
        const { headers } = request;
        try{
            const notValidHeader = testAuth(headers.authorization, {id:userId});
            if (notValidHeader) return response.status(401).json(notValidHeader)

            const result = await userService.deletMovieFromWatchList(userId, movieId);

            if (!result) return response.status(500).json({
                result: "error",
                message: "Servidor não conseguiu remover o filme da lista"
            });

            if (result.result === "error") return response.status(400).json(result);

            return response.status(200).json(result)
        } catch (error: any) {
            response.status(500).json(error);
        }
    }
);