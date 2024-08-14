import { Router } from "express";
import UserController from "../controllers/users.js";

const usersRouter = Router();

usersRouter.post("/signUp", UserController.signUp);
usersRouter.post("/signIn", UserController.signIn);
usersRouter.patch("/update-user-data", UserController.update);

export default usersRouter;
