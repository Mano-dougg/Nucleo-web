import { Router, Request, Response } from 'express';
import UsersController from '../../controller/users/UsersController';
import { validateData } from '../../middleware/validateData';
import { UserCreateInputSchema, UserUpdateInputSchema } from '../../../prisma/generated/zod';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', validateData(UserCreateInputSchema), (req: Request, res: Response) => usersController.create(req, res));
usersRouter.get('/name', usersController.getByName);
usersRouter.get('/email', usersController.getByEmail);
usersRouter.get('/:id', usersController.getById);
usersRouter.get('/', (req: Request, res: Response) => usersController.list(req, res));
usersRouter.put('/:id', validateData(UserUpdateInputSchema), usersController.update);
usersRouter.delete('/:id', usersController.delete);

export default usersRouter;
