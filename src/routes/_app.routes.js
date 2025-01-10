import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";

const appRoutes = Router();



appRoutes.get("/", (req, res) => {



    res.status(200).json({
        message: "Hello, Wold! Welcome To The Api",
        data: [
            {
                author: "{ JEBC-DeV }",
                version: "0.0.1",
            },
        ],
    });
});

appRoutes.use("/users", userRoutes);
appRoutes.use("/auth", authRoutes);

export default appRoutes;