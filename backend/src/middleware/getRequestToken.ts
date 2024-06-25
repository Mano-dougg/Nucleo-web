import { Request, Response, NextFunction } from 'express';
import { generateRequestToken } from '../utils/tmdbServices';
import { TMDBErrorResponse } from '../types/TMDBErrorResponse';
import { StatusCodes } from 'http-status-codes';

export function getRequestToken() {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tokenResponse = await generateRequestToken();
      if (tokenResponse.success) {
        res.locals.requestToken = tokenResponse.request_token;
        next();
      } else {
        throw tokenResponse;
      }
    } catch (err: unknown) {
      const error = err as TMDBErrorResponse;
      switch (error.status_code) {
        case 7:
          return res.status(StatusCodes.UNAUTHORIZED).json({ error: error.status_message })
        default:
          break;
      }
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  };
}
