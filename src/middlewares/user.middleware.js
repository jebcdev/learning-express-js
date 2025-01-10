import z from "zod";

import { userSchema } from "../schemas/user.schema.js";

const createUser = (req, res, next) => {
    try {
        userSchema.create.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors = error.issues.map((issue) => ({
                path: issue.path[0],
                message: issue.message,
            }));

            return res.status(400).json({
                message: "Error Creating User",
                data: errors,
            });
        }

        res.status(400).json({
            message: "Error While Creating User...",
            data: error,
        });
    }
};

const updateUser = (req, res, next) => {
    try {
        userSchema.update.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors = error.issues.map((issue) => ({
                path: issue.path[0],
                message: issue.message,
            }));

            return res.status(400).json({
                message: "Error Updating User",
                data: errors,
            });
        }

        res.status(400).json({
            message: "Error While Updating User...",
            data: error,
        });
    }
};

const login = (req, res, next) => {
    try {
        userSchema.login.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors = error.issues.map((issue) => ({
                path: issue.path[0],
                message: issue.message,
            }));

            return res.status(400).json({
                message: "Error Logging In",
                data: errors,
            });
        }

        res.status(400).json({
            message: "Error While Updating User...",
            data: error,
        });
    }
};

export const userMiddleware = {
    createUser,
    updateUser,
    login,
};
