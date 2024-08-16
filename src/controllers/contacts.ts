import type { Request, Response } from "express";
import { validateContact } from "../schemas/contact.schema.js";
import UserModel from "../models/user.js";
import ContactModel from "../models/contact.js";

export default class ContactController {
    static async add(req: Request, res: Response) {
        const result = validateContact(req.body);
        if (!result.success) {
            return res.status(400).json(result.data);
        }

        try {
            const { email } = req.body.session.user;
            if (!email) {
                return res.status(403).json({ message: "Access unauthorized" });
            }
            const userFrom = await UserModel.getByEmail(email);
            const userTo = await UserModel.getByEmail(result.data.email);
            if (!userFrom || !userTo) {
                return res.status(404).json({ message: "User not found" });
            }

            await ContactModel.create(userFrom, userTo);
            res.json({ message: "Success" });
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
