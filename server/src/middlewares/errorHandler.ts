import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import { MongooseError } from 'mongoose';
import createHttpError, { isHttpError } from 'http-errors';

import { ZodError } from 'zod';

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let errorMessage = 'An unknown error occurred';

  // HTTP errors
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  // JWT errors
  if (error instanceof JsonWebTokenError) {
    if (error.message === 'invalid signature') {
      statusCode = 401;
      errorMessage = 'Access denied, invalid token.';
    }
  }

  // Zod errors
  if (error instanceof ZodError) {
    statusCode = 401;
    errorMessage = error.errors[0].message;
  }

  // Normal errors
  if (error instanceof Error) {
    statusCode = 401;
    errorMessage = error.message;
  }

  // Sends back the error
  res.status(statusCode).json({ error: errorMessage });
};
