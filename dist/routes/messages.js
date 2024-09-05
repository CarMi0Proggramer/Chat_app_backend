import { Router } from "express";
import MessageController from "../controllers/messages.js";
const messagesRouter = Router();
messagesRouter.get("/", MessageController.getAll);
export default messagesRouter;
//# sourceMappingURL=messages.js.map