import { Prisma, PrismaClient } from '@prisma/client';
import { type Request,type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { type User } from '../../prisma/generated/zod/index.js';
import { type TMDBErrorResponse } from '../types/TMDBErrorResponse.js';
// import { passwordlessUser } from '../utils/sensitiveDataRemoval';
import {
  // fetchUserDetails,
  generateSessionId
} from '../utils/tmdbServices.js';

const prisma = new PrismaClient();

const NOT_FOUND_MESSAGE = (fieldName: string, field: string) => `No user found with ${fieldName} ${field}`;
const INVALID_CREDENTIALS_MESSAGE = 'Invalid credentials';

const findUser = async (email: string) => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      email
    },
  });
  if (!user) {
    throw new Error(NOT_FOUND_MESSAGE('email', email));
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

// const userResponse = (res: Response, responseCode: StatusCodes, user: User) => {
//   const sanitizedUser = passwordlessUser(user);
//   const { requestToken } = res.locals;
//   return res.status(responseCode).json({ ...sanitizedUser, requestToken });
// }

const errorResponse = (
  res: Response,
  responseCode: StatusCodes,
  err: any,
  email?: string
) => {
  switch (responseCode) {
    case StatusCodes.BAD_REQUEST:
      return res.status(responseCode).json({ error: err.message })
    case StatusCodes.UNAUTHORIZED:
      return res.status(responseCode).json({ error: err.message })
    case StatusCodes.NOT_FOUND:
      return res.status(responseCode).json({ error: err.message })
    case StatusCodes.INTERNAL_SERVER_ERROR:
      return res.status(responseCode).json({ error: 'Internal server error' })
    case StatusCodes.CONFLICT:
      return res.status(responseCode).json({ error: `Email ${email ?? 'provided'} already taken` })
    default:
      break;
  }
}

export const createUser = async (req: Request, res: Response) => {
  console.log(`Creating user with body: ${req.body.name}, ${req.body.email}, ${req.body.password}`);
  const {
    name,
    email,
    password,
  }: Pick<User, 'name' | 'email' | 'password'> = req.body;

  try {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
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
  }: Pick<User, 'email' | 'password'> = req.body;
  const requestToken = res.locals.requestToken;

  try {
    const foundUser = await findUser(email);
    if (foundUser && foundUser.password !== password) {
      const err = new Error(INVALID_CREDENTIALS_MESSAGE);
      return errorResponse(res, StatusCodes.UNAUTHORIZED, err);
    }
    return res.status(StatusCodes.OK).json({ ...foundUser, requestToken });
  } catch (err: any) {
    switch (err.message) {
      case NOT_FOUND_MESSAGE('email', email):
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
    await prisma.user.delete({
      where: { email }
    });
    return res.json({ message: `User ${user.name} deleted` });
  } catch (error: any) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
  }
}

export const getSessionId = async (req: Request, res: Response) => {
  const { requestToken } = req.body;

  try {
    console.log('Generating sessionId');
    const sessionResponse = await generateSessionId(requestToken);
    if (!sessionResponse.success) {
      console.log(`Generate sessionId failed: ${sessionResponse}`);
      throw new Error(sessionResponse.status_message);
    }
    console.log(`Generated SessionId with success: ${sessionResponse.session_id}`);
    return res.status(StatusCodes.OK).json(sessionResponse.session_id)
  } catch (err: unknown) {
    const error = err as TMDBErrorResponse;
    switch (error.status_code) {
      case 7:
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: error.status_message })
      default:
        break;
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
};

// export const updateUser = async (req: Request, res: Response) => {
//   const { sessionId, email } = req.body;
//   console.log(`Updating user with sessionId: ${sessionId}, email: ${email}`);

//   if (!sessionId || !email) return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Missing required property' });

//   try {
//     const user = await findUser(email);
//     const fetchedUser = await fetchUserDetails(sessionId);
//     if (user) {
//       await prisma.user.update({
//         where: { email },
//         data: { tmdbId: fetchedUser.id }
//       });
//     } else {
//       throw new Error(NOT_FOUND_MESSAGE('email', email));
//     }
//     // return userResponse(res, StatusCodes.CREATED, fetchedUser);
//     return res.status(StatusCodes.OK).json({ ...user, sessionId });
//   } catch (error: any) {
//     return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
//   }
// }
