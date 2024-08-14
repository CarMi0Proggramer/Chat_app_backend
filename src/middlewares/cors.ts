import cors from "cors";

const ALLOWED_ORIGINS = ["http://localhost:5173"];

export function corsMiddleware() {
    return cors({
        origin: (origin, callback) => {
            if (ALLOWED_ORIGINS.includes(origin) || !origin) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by cors"));
        },
        credentials: true,
    });
}
