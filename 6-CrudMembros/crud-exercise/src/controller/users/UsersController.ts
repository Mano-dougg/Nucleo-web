import { Request, Response } from "express";
import UsersService from "../../service/users/UsersService";
import { StatusCodes } from 'http-status-codes';

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
  ) { }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getById(Number(id));
      if (!user) {
        throw new Error('User not found');
      }
      res.json(user);
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const users = await this.usersService.list();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
  }
};
