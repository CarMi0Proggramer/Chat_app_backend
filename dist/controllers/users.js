import UserModel from "../models/user.js";
import { validatePartialUser } from "../schemas/user.schema.js";
import { extractUserData } from "../utils/user_helpers.js";
export default class UserController {
    static async update(req, res) {
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
            const userData = extractUserData(updatedUser);
            res.json(userData);
        }
        catch (err) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
//# sourceMappingURL=users.js.map