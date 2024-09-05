import { Router } from "express";
import ContactController from "../controllers/contacts.js";
const contactsRouter = Router();
contactsRouter.get("/", ContactController.getAll);
contactsRouter.post("/", ContactController.add);
export default contactsRouter;
//# sourceMappingURL=contacts.js.map