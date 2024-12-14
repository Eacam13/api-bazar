import { Request, Response, NextFunction } from 'express';


class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // Erro desconhecido
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export { AppError, errorHandler };