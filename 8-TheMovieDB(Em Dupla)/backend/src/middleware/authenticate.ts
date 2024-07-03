// middleware/authenticate.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: number; // Adicione o userId ao objeto Request
}

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
<<<<<<< HEAD
  
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    console.log(token)
    jwt.verify(token, process.env.JWT_PASS as string, (err, decoded) => {
      console.log(err)
=======

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
>>>>>>> 8fb826bbe29fd9ba40d10f45d80d8eabb19dd024
      if (err) {
        return res.sendStatus(403);
      }

      req.userId = (decoded as { userId: number }).userId;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
