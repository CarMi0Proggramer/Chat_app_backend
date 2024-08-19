import { Request, Response } from "express";
import MessageModel from "../models/message.js";

export default class MessageController {
    static async getAll(req: Request, res: Response) {
        try {
            const user = req.body.session.user;
            if (!user) {
                return res.status(403).json({ message: "Access unauthorized" });
            }

            const messages = await MessageModel.getAll(user.email);
            res.json(messages);
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
