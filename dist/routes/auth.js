import { Router } from "express";
import { AuthController } from "../controllers/auth.js";
const authRouter = Router();
authRouter.post("/signIn", AuthController.signIn);
authRouter.post("/signUp", AuthController.signUp);
export default authRouter;
//# sourceMappingURL=auth.js.map