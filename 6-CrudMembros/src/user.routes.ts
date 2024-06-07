
import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as UserService from "./user.services";

export const userRouter = express.Router();

// GET: Listar todos os usuários
userRouter.get("/", async (request: Request, response: Response) => {
  try {
    const users = await UserService.listUsers();
    return response.status(200).json(users);
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// GET: Um único usuário pelo ID
userRouter.get("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    const user = await UserService.getUserById(id);
    if (user) {
      return response.status(200).json(user);
    }
    return response.status(404).json("Usuário não encontrado");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});

// POST: Criar um usuário
userRouter.post(
  "/",
  body("nome").isString(),
  body("email").isEmail(),
  body("senha").isString(),
  body("idade").isInt(),
  body("estado").isString(),
  body("cidade").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const user = request.body;
      const newUser = await UserService.createUser(user);
      return response.status(201).json(newUser);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// PUT: Atualizar um usuário
userRouter.put(
  "/:id",
  body("nome").isString(),
  body("email").isEmail(),
  body("senha").isString(),
  body("idade").isInt(),
  body("estado").isString(),
  body("cidade").isString(),
  async (request: Request, response: Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const id: number = parseInt(request.params.id, 10);
    try {
      const user = request.body;
      const updatedUser = await UserService.updateUserById(id, user);
      return response.status(200).json(updatedUser);
    } catch (error: any) {
      return response.status(500).json(error.message);
    }
  }
);

// DELETE: Deletar um usuário pelo ID
userRouter.delete("/:id", async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id, 10);
  try {
    await UserService.deleteUserById(id);
    return response.status(204).json("Usuário foi deletado com sucesso");
  } catch (error: any) {
    return response.status(500).json(error.message);
  }
});
