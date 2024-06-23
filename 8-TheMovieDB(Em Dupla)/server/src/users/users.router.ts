import express, { Request, Response } from 'express';

import * as userService from './users.service';
import { body } from 'express-validator';

export const userRouter = express.Router();

// GET: pegar uma lista com todos os usuários
userRouter.get("/",
    async (request: Request, response:Response) => {
        const { name, email } = request.query;
        try{

            const result = await userService.getAllUser(name, email)
            
            return response.status(200).json(result)
        } catch (error:any){
            return response.status(500).json(error);
        };
    }
);

// GET: pegar um usuário por id
userRouter.get("/:id",
    async (request: Request, response:Response) => {
        const { id } = request.params;
        try{
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

// PUT: atualizar nome, email, ou senha de um usuário
userRouter.put("/:id",
    async (request: Request, response: Response) => {
        const { name, email, password } = request.body;
        const { id } = request.params;
        try{
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
    async (request: Request, response: Response) => {
        const { id } = request.params;
        try{
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
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação de outro usuário"),
    async (request: Request, response: Response) => {
        const fromId = request.params.id;
        const { id: toId} = request.body;
        try{
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
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação de outro usuário"),
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const { id: movieId } = request.body;
        try{
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
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const { id: movieId, rating } = request.body;
        try{
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
    async (request: Request, response: Response) => {
        const { id, movieId } = request.params;
        try{
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
userRouter.post("/:id/watchlist",
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação do filme"),
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const movieId = request.body.id;
        try{
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
userRouter.post("/:id/watchlist",
    body("id").isNumeric().withMessage("O parâmetro 'id' deve ser um número de identificação do filme"),
    async (request: Request, response: Response) => {
        const userId = request.params.id;
        const movieId = request.body.id;
        try{
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