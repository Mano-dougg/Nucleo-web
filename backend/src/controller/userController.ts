import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { User } from '../../prisma/generated/zod';
import { StatusCodes } from 'http-status-codes';

const prisma = new PrismaClient();

const NOT_FOUND_MESSAGE = (fieldName: string, field: string) => `No user found with ${fieldName} ${field}`;

const passwordlessUser = (user: User) => {
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

const getById = async (id: string) => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id
    },
  });
  return user;
};

const findUser = async (id: string) => {
  const user = await getById(id);
  if (!user) {
    throw new Error(NOT_FOUND_MESSAGE("id", id.toString()));
  }
  return user;
}

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const foundUser = await findUser(id);
    return userResponse(res, StatusCodes.OK, foundUser);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.NOT_FOUND, err);
  }
}

const userResponse = (res: Response, responseCode: StatusCodes, user: User) => {
  const sanitizedUser = passwordlessUser(user);
  return res.status(responseCode).json(sanitizedUser);
}

const errorResponse = (
  res: Response,
  responseCode: StatusCodes,
  err: any,
  email?: string
) => {
  switch (responseCode) {
    case StatusCodes.NOT_FOUND:
      return res.status(responseCode).json({ error: err.message })
    case StatusCodes.INTERNAL_SERVER_ERROR:
      return res.status(responseCode).json({ error: "Internal server error" })
    case StatusCodes.CONFLICT:
      return res.status(responseCode).json({ error: `Email ${email ?? "provided"} already taken` })
    default:
      break;
  }
}

export const createUser = async (req: Request, res: Response) => {
  const {
    name,
    email,
    password,
  }: Omit<User, "id"> = req.body;

  try {
    console.log(req.body);
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    });
    console.log(createdUser);
    return userResponse(res, StatusCodes.CREATED, createdUser);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return errorResponse(res, StatusCodes.CONFLICT, err, email);
      }
      return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'ID is required' });

  try {
    const user = await findUser(id);
    await prisma.user.delete({
      where: { id }
    });
    return res.json({ message: `User ${user.name} deleted` });
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
}
