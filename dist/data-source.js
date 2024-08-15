import "reflect-metadata";
import { DataSource } from "typeorm";
const railway_host = "postgres.railway.internal";
const railway_username = "postgres";
const railway_password = "EPXwXlCVIomecrIJDnQRTQZgrDQYxeKo";
const railway_database = "railway";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "carlos",
    password: "chat_db_password",
    database: "chat_db",
    entities: [
        process.env.NODE_ENV == "production"
            ? "./dist/entities/*.js"
            : "./src/entities/*.ts",
    ],
    logging: true,
    synchronize: false,
    migrations: [
        process.env.NODE_ENV == "production"
            ? "./dist/migrations/*.js"
            : "./src/migrations/*.ts",
    ],
});
//# sourceMappingURL=data-source.js.map