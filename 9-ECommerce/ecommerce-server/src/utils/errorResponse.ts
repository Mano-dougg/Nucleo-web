import { StatusCodes } from "http-status-codes";
import { Response } from 'express';

export const errorResponse = (
  res: Response,
  responseCode: StatusCodes,
  err: any,
  attribute?: any
) => {
  switch (responseCode) {
    case StatusCodes.BAD_REQUEST:
      return res.status(responseCode).json({ error: err.message });
    case StatusCodes.NOT_FOUND:
      return res.status(responseCode).json({ error: err.message });
    case StatusCodes.INTERNAL_SERVER_ERROR:
      return res.status(responseCode).json({ error: 'Internal server error' });
    case StatusCodes.CONFLICT:
      return res
        .status(responseCode)
        .json({
          error: `Unique attribute '${attribute}' already taken`,
        });
    default:
      break;
  }
};

export const NOT_FOUND_MESSAGE = (field: string) => `No instance found with field: ${field}`;
