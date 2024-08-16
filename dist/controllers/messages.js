import MessageModel from "../models/message.js";
export default class MessageController {
    static async getAll(req, res) {
        try {
            const { email } = req.body.session.user;
            if (!email) {
                return res.status(403).json({ message: "Access unauthorized" });
            }
            const messages = await MessageModel.getAll(email);
            res.json(messages);
        }
        catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
//# sourceMappingURL=messages.js.map