import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { errorResponse, NOT_FOUND_MESSAGE } from '../utils/errorResponse';

const prisma = new PrismaClient();

const INVALID_CREDENTIALS_MESSAGE = 'Invalid credentials';

const findUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email
    },
  });
  if (!user) {
    throw new Error(NOT_FOUND_MESSAGE(email));
  }
  return user;
}

export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) return errorResponse(res, StatusCodes.BAD_REQUEST, { message: 'Email is required' });

  try {
    const foundUser = await findUser(email);
    return res.status(StatusCodes.OK).json(foundUser);
  } catch (err: any) {
    return errorResponse(res, StatusCodes.NOT_FOUND, err);
  }
}

export const createUser = async (req: Request, res: Response) => {
  console.log(`Creating user with body: ${req.body.name}, ${req.body.email}, ${req.body.password}`);
  const {
    name,
    email,
    password,
    role,
  } = req.body;

  try {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role: role ?? 'USER',
      }
    });
    return res.status(StatusCodes.CREATED).json(createdUser);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        return errorResponse(res, StatusCodes.CONFLICT, err, email);
      }
      return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
    }
  }
}

export const login = async (req: Request, res: Response) => {
  const {
    email,
    password,
  } = req.body;

  try {
    const foundUser = await findUser(email);
    console.log(foundUser);
    if (foundUser && foundUser.password !== password) {
      const err = new Error(INVALID_CREDENTIALS_MESSAGE);
      return errorResponse(res, StatusCodes.UNAUTHORIZED, err);
    }
    return res.status(StatusCodes.OK).json(foundUser);
  } catch (err: any) {
    switch (err.message) {
      case NOT_FOUND_MESSAGE(email):
        return errorResponse(res, StatusCodes.NOT_FOUND, err);
      default:
        return errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, err);
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Email is required' });

  try {
    const user = await findUser(email);
    console.log(user);
    await prisma.user.delete({
      where: { email }
    });
    return res.json({ message: `User ${user.name} deleted` });
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
}
