import { Router } from 'express';
import { UserCreateInputSchema, UserPartialSchema } from '../../prisma/generated/zod/index';
import {
  createUser,
  deleteUser,
  getUserByEmail,
  login
} from '../controller/userController';
import { validateSchema } from '../middleware/validateSchema';

const userRouter = Router();

userRouter.delete('/', deleteUser);
userRouter.get('/', getUserByEmail);
userRouter.post('/login', validateSchema(UserPartialSchema), login);
userRouter.post('/signup', validateSchema(UserCreateInputSchema), createUser);

export default userRouter;
