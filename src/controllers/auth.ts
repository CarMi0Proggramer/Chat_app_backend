import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/user.js";
import { validatePartialUser, validateUser } from "../schemas/user.schema.js";
import { signJWT } from "../utils/helpers.js";

export class AuthController {
    static async signUp(req: Request, res: Response) {
        const result = validateUser(req.body);
        if (!result.success) {
            return res.status(400).json(result.data);
        }

        try {
            result.data.password = await bcrypt.hash(result.data.password, 10);
            const user = await UserModel.create(result.data);
            if (!user) {
                return res
                    .status(403)
                    .json({ message: "You're already registered, sign in" });
            }

            let userData = { name: user.name, email: user.email };
            const token = signJWT(userData);

            res.cookie("access_token", token, {
                sameSite: "strict",
                httpOnly: true,
                maxAge: 3000 * 60 * 60,
                secure: process.env.NODE_ENV == "production",
            }).json(userData);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async signIn(req: Request, res: Response) {
        const result = validatePartialUser(req.body);
        if (!result.success) {
            return res.status(400).json(result.data);
        }

        try {
            const user = await UserModel.getByEmail(result.data.email);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const isThePasswordOfTheUser = await bcrypt.compare(
                result.data.password,
                user.password
            );

            if (!isThePasswordOfTheUser) {
                return res.status(403).json({ message: "Invalid password" });
            }

            let userData = {
                name: user.name,
                email: user.email,
            };
            const token = signJWT(userData);

            res.cookie("access_token", token, {
                sameSite: "strict",
                maxAge: 3000 * 60 * 60,
                httpOnly: true,
                secure: process.env.NODE_ENV == "production",
            }).json(userData);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
