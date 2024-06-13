import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}
export {}; // Adicione isso para garantir que o arquivo seja tratado como um módulo

export function json(): any {
  throw new Error('Function not implemented.');
}
