import jwt from "jsonwebtoken";
export function signJWT(data) {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, {
        expiresIn: "3h",
    });
}
export function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}
//# sourceMappingURL=jwt_helpers.js.map