import { Router } from 'express';
import { createUser, deleteUser } from '../controller/userController';
import cors from 'cors'
import bodyParser from 'body-parser';
import { validateUser } from '../middleware/validateUser';
import { UserCreateInputSchema } from '../../prisma/generated/zod/index';

export const userRouter = Router();

userRouter.use(cors())
userRouter.use(bodyParser.json());
userRouter.post('/', validateUser(UserCreateInputSchema), createUser);
userRouter.delete('/', deleteUser);
