import { Response, Request, NextFunction } from "express";
import { AppError } from "../middlewares/errorHandler";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) throw new AppError("Token missing", 401);

    const [, token] = authToken.split(" ");

    try {

        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

        req.user_id = sub;

        return next();

    } catch {
        throw new AppError("Invalid token", 401);
    }
}   
