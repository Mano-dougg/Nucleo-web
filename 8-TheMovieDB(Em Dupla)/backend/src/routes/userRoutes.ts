import cors from 'cors';
import { Router } from 'express';
import { UserCreateInputSchema, UserPartialSchema } from '../../prisma/generated/zod/index.js';
import { createUser, deleteUser, getSessionId, getUserByEmail, login } from '../controller/userController.js';
import { getRequestToken } from '../middleware/getRequestToken.js';
import { validateUser } from '../middleware/validateUser.js';

const userRouter = Router();

userRouter.use(cors());
userRouter.delete('/', deleteUser);
userRouter.get('/', getUserByEmail);
userRouter.post('/authenticate', getSessionId);
userRouter.post('/login', validateUser(UserPartialSchema), getRequestToken(), login);
userRouter.post('/signup', validateUser(UserCreateInputSchema), createUser);

export default userRouter;
