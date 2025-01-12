import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const DbClient = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "aVerySecretString";

const GenerateToken = async (email) => {
    try {
        const userData = await DbClient.user.findUnique({
            where: {
                email,
            },
        });

        const token = await jwt.sign(
            {
                email,
                isAdmin: userData.isAdmin,
            },
            JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );

        if (!token) throw new Error("Error Generating Token");

        return token;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

const VerifyToken = async (token) => {
    try {
        const decoded = await jwt.verify(token, JWT_SECRET);

        // Validar que el token tenga lo necesario
        if (
            !decoded.email ||
            typeof decoded.isAdmin === "undefined"
        ) {
            throw new Error("Invalid token payload");
        }
        

        return decoded;
    } catch (error) {
        console.log(error);
        throw new Error("Error Verifying Token");
    }
};

export const JwtUtil = { GenerateToken, VerifyToken };
