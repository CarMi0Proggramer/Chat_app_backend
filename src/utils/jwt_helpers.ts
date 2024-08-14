import jwt from "jsonwebtoken";

export function signJWT(data: object) {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, {
        expiresIn: "3h",
    });
}

export function verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}
