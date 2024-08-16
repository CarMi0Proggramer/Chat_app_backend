import "reflect-metadata";
import { DataSource } from "typeorm";

let host: string,
    port: number,
    username: string,
    password: string,
    database: string;
let entities: string;
let migrations: string;

if (process.env.NODE_ENV == "production") {
    host = "roundhouse.proxy.rlwy.net";
    port = 17590;
    username = "postgres";
    password = "hmmMQNCTRuxEYoyZmvLduljUyWsAUglg";
    database = "railway";

    entities = "./dist/entities/*.js";
    migrations = "./dist/migrations/*.js";
} else {
    host = "localhost";
    port = 5432;
    username = "carlos";
    password = "chat_db_password";
    database = "chat_db";

    entities = "./src/entities/*.ts";
    migrations = "./src/migrations/*.ts";
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    entities: [entities],
    logging: true,
    synchronize: false,
    migrations: [migrations],
});
