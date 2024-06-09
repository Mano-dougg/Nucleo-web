import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from ".././secrets";
import { BadRequestException } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password, age, state, city } = req.body;

  let user = await prismaClient.user.findFirst({ where: { email } });
  if (user) {
    next(new BadRequestException("E-mail já em uso.", ErrorCode.EMAIL_IN_USE));
  }
  user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
      age,
      state,
      city,
    },
  });
  res.json(user);
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  let user = await prismaClient.user.findFirst({ where: { email } });
  if (!user) {
    next(
      new BadRequestException("Usuário não existe.", ErrorCode.USER_NOT_FOUND)
    );
  }
  if (!compareSync(password, user!.password)) {
    next(
      new BadRequestException("Senha incorreta.", ErrorCode.INCORRECT_PASSWORD)
    );
  }

  const token = jwt.sign(
    {
      userID: user!.id,
    },
    JWT_SECRET
  );

  res.json({ user, token });
};
