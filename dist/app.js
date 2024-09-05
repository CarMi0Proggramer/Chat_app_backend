import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source.js";
import { corsMiddleware } from "./middlewares/cors.js";
import { verifyUserToken } from "./middlewares/verify_user_token.js";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import messagesRouter from "./routes/messages.js";
import contactsRouter from "./routes/contacts.js";
dotenv.config();
AppDataSource.initialize()
    .then(() => {
    console.log("Database connected");
})
    .catch((err) => {
    console.log("Error connecting with the database: ", err);
});
export const app = express();
app.disable("x-powered-by");
const port = process.env.PORT ?? 3000;
app.use(express.json());
app.use(corsMiddleware());
app.use(cookieParser());
app.use(verifyUserToken);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
app.use("/contacts", contactsRouter);
export const server = app.listen(port, () => {
    console.log("App listening on port ", port);
});
//# sourceMappingURL=app.js.map