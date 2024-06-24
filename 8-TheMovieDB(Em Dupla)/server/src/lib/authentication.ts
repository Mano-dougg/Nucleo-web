import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { validateEmail } from './data-validation';

export const authenticateToken = (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers['authorization'];

  if (!token) return response.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
    
    if (err) return response.status(403).json(err); // Forbidden
    request.headers.authorization = JSON.stringify(user);
    next();
  });
};

export const testAuth = (header: string | undefined,
    {id, email}: {
        id?: any,
        email?: any
    }
) => {
    if (!header) return {
        result: "error",
        message: "Você não foi autorizado a acessar essa funcionalidade"
    };

    const realHeader = JSON.parse(header);

    let headerId:number = 0;
    let headerEmail:string = "";
    if (realHeader.id 
        && typeof realHeader.id === 'number') headerId = realHeader.id;
    if (realHeader.email 
        && typeof realHeader.email === 'string') headerEmail = realHeader.email;

    if (id 
        && parseInt(id)!==headerId) return {
            result: "error",
            message: "Você não tem permissão para acessar esse usuário"
        }
    
    if (email
        && typeof email === 'string'
        && validateEmail(email)
        && email!==headerEmail) return {
            result: "error",
            message: "Você não tem permissão para acessar esse usuário"
        }    

}