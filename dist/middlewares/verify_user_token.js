import { verifyToken } from "../utils/jwt_helpers.js";
export function verifyUserToken(req, res, next) {
    req.body.session = { user: null };
    try {
        let data = verifyToken(req.cookies.access_token);
        req.body.session.user = data;
    }
    catch { }
    next();
}
//# sourceMappingURL=verify_user_token.js.map