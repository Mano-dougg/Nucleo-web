import { Router, Request, Response } from 'express';
import UsersController from '../../controller/users/UsersController';
import { validateData } from '../../middleware/validateData';
import { UserCreateInputSchema, UserUpdateInputSchema } from '../../../prisma/generated/zod';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', validateData(UserCreateInputSchema), (req: Request, res: Response) => usersController.create(req, res));
usersRouter.get('/:id', (req: Request, res: Response) => usersController.getById(req, res));
usersRouter.get('/', (req: Request, res: Response) => usersController.list(req, res));
usersRouter.put('/:id', validateData(UserUpdateInputSchema), (req: Request, res: Response) => usersController.update(req, res));
usersRouter.delete('/:id', (req: Request, res: Response) => usersController.delete(req, res));

export default usersRouter;
