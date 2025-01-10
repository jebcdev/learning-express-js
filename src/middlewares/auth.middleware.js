import { JwtUtil } from "../utils/jwt.util.js";

export const verifyTokenMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const email = await JwtUtil.VerifyToken(token);

        if (!email) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = { email };
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Error verifying token",
            data: error.message,
        });
    }
};