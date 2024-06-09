import { Router, Request, Response } from 'express';
import UsersController from '../../controller/users/UsersController';
// import { validateData } from '../../middleware/validateData';

const usersRouter = Router();
const usersController = new UsersController();

// usersRouter.post('/', validateData(), UsersController.create);
usersRouter.get('/:id', (req: Request, res: Response) => usersController.getById(req, res));
usersRouter.get('/', (req: Request, res: Response) => usersController.list(req, res));
// usersRouter.put('/:id', validateData(), UsersController.update);
// usersRouter.delete('/:id', validateData(schema), UsersController.delete);

export default usersRouter;
