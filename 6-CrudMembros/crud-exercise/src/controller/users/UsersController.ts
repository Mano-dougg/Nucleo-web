import { Request, Response } from "express";
import UsersService from "../../service/users/UsersService";
import { StatusCodes } from "http-status-codes";
import { User, UserCreateInputSchema } from "../../../prisma/generated/zod";
import { Prisma } from "@prisma/client";

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
  ) { }

  private NOT_FOUND_MESSAGE = (fieldName: string, field: string) => `No user found with ${fieldName} ${field}`;
  private EMAIL_TAKEN_MESSAGE = (email: string) => `Email ${email} already taken`;
  private INTERNAL_ERROR_MESSAGE = "Internal server error";

  private passwordlessUser = (user: User) => {
    function exclude<User, Key extends keyof User>(
      user: User,
      keys: Key[]
    ): Omit<User, Key> {
      return Object.fromEntries(
        Object.entries(user as { [ key: string ]: any }).filter(([ key ]) => !keys.includes(key as Key))
      ) as Omit<User, Key>;
    }
    return exclude(user, [ "password" ]);
  }

  private findUser = async (id: number) => {
    const user = await this.usersService.getById(id);
    if (!user) {
      throw new Error(this.NOT_FOUND_MESSAGE("id", id.toString()));
    }
    return user;
  }

  private userResponse = (res: Response, responseCode: StatusCodes, user: User) => {
    const sanitizedUser = this.passwordlessUser(user);
    return res.status(responseCode).json(sanitizedUser);
  }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const foundUser = await this.findUser(Number(id));
      return this.userResponse(res, StatusCodes.OK, foundUser);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public getByEmail = async (req: Request, res: Response) => {
    const { q } = req.query;

    try {
      const foundUser = await this.usersService.getByEmail(q as string);
      if (!foundUser) {
        throw new Error(this.NOT_FOUND_MESSAGE("email", q as string));
      }
      return this.userResponse(res, StatusCodes.OK, foundUser);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public getByName = async (req: Request, res: Response) => {
    const { q } = req.query;

    try {
      const foundUsers = await this.usersService.getByName(q as string);
      if (foundUsers.length === 0) {
        throw new Error(this.NOT_FOUND_MESSAGE("name", q as string));
      }
      const users = foundUsers.map((user) => this.passwordlessUser(user));
      return res.status(StatusCodes.OK).json(users);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const foundUsers = await this.usersService.list();
      const users = foundUsers.map((user) => this.passwordlessUser(user));
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
      const createdUser = await this.usersService.create({
        name,
        email,
        password,
        age,
        city,
        state,
      });
      return this.userResponse(res, StatusCodes.CREATED, createdUser);
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
      const _ = await this.findUser(Number(id));
      const deletedUser = await this.usersService.delete(Number(id))
      return this.userResponse(res, StatusCodes.OK, deletedUser);
    } catch (err: any) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: err.message });
    }
  }

  public update = async (req: Request, res: Response) => {
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
      const foundUser = await this.findUser(Number(id));
      if (foundUser) {
        const newUser = await this.usersService.update(Number(id), foundUser, {
          name,
          email,
          password,
          age,
          city,
          state,
        });
        return this.userResponse(res, StatusCodes.CREATED, foundUser);
      }
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
