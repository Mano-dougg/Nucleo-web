import { Request, Response } from "express";
import UsersService from "../../service/users/UsersService";
import { StatusCodes } from "http-status-codes";
import { User, UserCreateInputSchema } from "../../../prisma/generated/zod";
import { Prisma } from "@prisma/client";

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
    private NOT_FOUND_MESSAGE = (fieldName: string, field: string) => `No user found with ${fieldName} ${field}`,
    private EMAIL_TAKEN_MESSAGE = (email: string) => `Email ${email} already taken`,
    private INTERNAL_ERROR_MESSAGE = "Internal server error"
  ) { }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getById(Number(id));
      if (!user) {
        throw new Error(this.NOT_FOUND_MESSAGE("id", id));
      }
      return res.status(StatusCodes.OK).json(user);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public getByEmail = async (req: Request, res: Response) => {
    const { q } = req.query;

    try {
      const user = await this.usersService.getByEmail(q as string);
      if (!user) {
        throw new Error(this.NOT_FOUND_MESSAGE("email", q as string));
      }
      return res.status(StatusCodes.OK).json(user);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public getByName = async (req: Request, res: Response) => {
    const { q } = req.query;

    try {
      const user = await this.usersService.getByName(q as string);
      if (user.length === 0) {
        throw new Error(this.NOT_FOUND_MESSAGE("name", q as string));
      }
      return res.status(StatusCodes.OK).json(user);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const users = await this.usersService.list();
      return res.status(StatusCodes.OK).json(users);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: this.INTERNAL_ERROR_MESSAGE });
    }
  }

  public async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
      age,
      city,
      state,
    }: Omit<User, "id"> = req.body;

    try {
      const user = await this.usersService.create({
        name,
        email,
        password,
        age,
        city,
        state,
      });
      return res.status(StatusCodes.CREATED).json(user);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          return res.status(StatusCodes.CONFLICT).json({ message: this.EMAIL_TAKEN_MESSAGE(email) });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: this.INTERNAL_ERROR_MESSAGE });
      }
    }
  }

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getById(Number(id));
      if (!user) {
        throw new Error(this.NOT_FOUND_MESSAGE("id", id));
      }
      const result = await this.usersService.delete(Number(id))
      return res.status(StatusCodes.OK).json(result);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;

    const {
      name,
      email,
      password,
      age,
      city,
      state,
    }: Partial<User> = req.body;

    try {
      const user = await this.usersService.getById(Number(id));
      if (!user) {
        throw new Error(this.NOT_FOUND_MESSAGE("id", id));
      }

      const newUser = await this.usersService.update(Number(id), user, {
        name,
        email,
        password,
        age,
        city,
        state,
      });
      return res.status(StatusCodes.CREATED).json(newUser);
    } catch (err: any) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          return res.status(StatusCodes.CONFLICT).json({ message: this.EMAIL_TAKEN_MESSAGE(email!) });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: this.INTERNAL_ERROR_MESSAGE });
      } else {
        return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
      }
    }
  }
};
