import { Router, Request, Response } from 'express';
import UsersController from '../../controller/users/UsersController';
import { validateData } from '../../middleware/validateData';
import { UserCreateInputSchema } from '../../../prisma/generated/zod';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', validateData(UserCreateInputSchema), (req: Request, res: Response) => usersController.create(req, res));
usersRouter.get('/:id', (req: Request, res: Response) => usersController.getById(req, res));
usersRouter.get('/', (req: Request, res: Response) => usersController.list(req, res));
// usersRouter.put('/:id', validateData(), UsersController.update);
// usersRouter.delete('/:id', validateData(schema), UsersController.delete);

export default usersRouter;
