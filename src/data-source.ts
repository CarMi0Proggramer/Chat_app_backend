import "reflect-metadata";
import { DataSource } from "typeorm";

const railway_host = "postgres.railway.internal";
const railway_username = "postgres";
const railway_password = "EPXwXlCVIomecrIJDnQRTQZgrDQYxeKo";
const railway_database = "railway";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: railway_host,
    port: 5432,
    username: railway_username,
    password: railway_password,
    database: railway_database,
    entities: [
        process.env.NODE_ENV == "production"
            ? "./dist/entities/*.js"
            : "./src/entities/*.ts",
    ],
    logging: true,
    synchronize: true,
    migrations: [
        process.env.NODE_ENV == "production"
            ? "./dist/migrations/*.js"
            : "./src/migrations/*.ts",
    ],
});
