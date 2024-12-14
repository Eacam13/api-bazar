"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const errorHandler_1 = require("../middlewares/errorHandler");
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken)
        throw new errorHandler_1.AppError("Token missing", 401);
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.user_id = sub;
        return next();
    }
    catch (_a) {
        throw new errorHandler_1.AppError("Invalid token", 401);
    }
}
