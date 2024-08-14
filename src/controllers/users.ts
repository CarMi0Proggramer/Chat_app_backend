import type { Request, Response } from "express";
import UserModel from "../models/user.js";
import { validatePartialUser } from "../schemas/user.schema.js";

export default class UserController {
    static async update(req: Request, res: Response) {
        const result = validatePartialUser(req.body);
        if (!result.success) {
            return res.status(400).json(result.data);
        }

        try {
            const user = req.body.session.user;
            if (!user) {
                return res.status(403).json({ message: "Access unauthorized" });
            }

            const updatedUser = await UserModel.update(user.email, result.data);
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }

            res.json({
                name: updatedUser.name,
                email: updatedUser.email,
                configurations: updatedUser.configurations,
                description: updatedUser.description,
                sentMessages: updatedUser.sentMessages,
                receivedMessages: updatedUser.receivedMessages,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
