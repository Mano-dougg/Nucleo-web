import { Router } from 'express';
import { createUser, deleteUser, getUserById } from '../controller/userController';
import cors from 'cors';
import { validateUser } from '../middleware/validateUser';
import { UserCreateInputSchema } from '../../prisma/generated/zod/index';

const userRouter = Router();

userRouter.use(cors());
userRouter.post('/', validateUser(UserCreateInputSchema), createUser);
userRouter.get('/', getUserById);
userRouter.delete('/', deleteUser);

export default userRouter;
