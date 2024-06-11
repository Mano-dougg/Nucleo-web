import { Router, Request, Response } from 'express';
import { createUser, deleteUser, listUsers } from '../controller/userController';
import { validateUser } from '../middleware/validateUser';
import { UserCreateInputSchema } from '../../prisma/generated/zod';

export const userRouter = Router();

userRouter.get('/', listUsers);
userRouter.post('/', validateUser(UserCreateInputSchema), createUser);
userRouter.delete('/', deleteUser);
