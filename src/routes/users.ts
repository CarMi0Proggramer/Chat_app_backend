import { Router } from "express";
import UserController from "../controllers/users.js";

const usersRouter = Router();

usersRouter.patch("/update-user-data", UserController.update);

export default usersRouter;
