import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt_helpers.js";

export function verifyUserToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    req.body.session = { user: null };

    try {
        let data = verifyToken(req.cookies.access_token);
        req.body.session.user = data;
    } catch {}

    next();
}
