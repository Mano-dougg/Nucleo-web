import { Request, Response } from "express";
import UsersService from "../../service/users/UsersService";
import { StatusCodes } from "http-status-codes";
import { User, UserCreateInputSchema } from "../../../prisma/generated/zod";
import { Prisma } from "@prisma/client";

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
  ) { }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getById(Number(id));
      if (!user) {
        throw new Error("User not found");
      }
      return res.status(StatusCodes.OK).json(user);
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const users = await this.usersService.list();
      return res.status(StatusCodes.OK).json(users);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
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
          return res.status(StatusCodes.CONFLICT).json({ message: "Email already taken" });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
      }
    }
  }

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await this.usersService.getById(Number(id));
      if (!user) {
        throw new Error("User not found");
      }
      const result = await this.usersService.delete(Number(id))
      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
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
        throw new Error("User not found");
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
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          return res.status(StatusCodes.CONFLICT).json({ message: "Email already taken" });
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
      } else {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
      }
    }
  }
};
