import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "aVerySecretString";

const GenerateToken = async (email) => {
    try {
        const token = await jwt.sign(
            {
                email,
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

const VerifyToken = async  (token) => {
    try {
        const { email } = await jwt.verify(token, JWT_SECRET);


        if (!email) throw new Error("Error Verifying Token");

        return email;
    } catch (error) {
        console.log(error);
        throw new Error("Error Verifying Token");
    }
};

export const JwtUtil = { GenerateToken, VerifyToken };
