import "reflect-metadata";
import { DataSource } from "typeorm";
let host, username, password, database;
let entities;
let migrations;
if (process.env.NODE_ENV == "production") {
    host = "postgres.railway.internal";
    username = "postgres";
    password = "EPXwXlCVIomecrIJDnQRTQZgrDQYxeKo";
    database = "railway";
    entities = "./dist/entities/*.js";
    migrations = "./dist/migrations/*.js";
}
else {
    host = "localhost";
    username = "carlos";
    password = "chat_db_password";
    database = "chat_db";
    entities = "./src/entities/*.ts";
    migrations = "./src/migrations/*.ts";
}
export const AppDataSource = new DataSource({
    type: "postgres",
    host: host,
    port: 5432,
    username: username,
    password: password,
    database: database,
    entities: [entities],
    logging: true,
    synchronize: false,
    migrations: [migrations],
});
//# sourceMappingURL=data-source.js.map