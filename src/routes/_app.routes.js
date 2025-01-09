import { Router } from "express";
import userRoutes from "./user.routes.js";
import { BcryptUtil } from "../utils/bcrypt.util.js";

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

export default appRoutes;