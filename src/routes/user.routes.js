import { Router } from "express";

import { userController } from "../controllers/user.controller.js";
import { userMiddleware } from "../middlewares/user.middleware.js";
import { verifyIdMiddleware } from "../middlewares/verifyId.middleware.js";

const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id",verifyIdMiddleware, userController.getUserById);
userRoutes.post("/",userMiddleware.createUser, userController.createUser);
userRoutes.patch("/:id",verifyIdMiddleware,userMiddleware.updateUser, userController.updateUser);
userRoutes.delete("/:id", verifyIdMiddleware,userController.deleteUser);


export default userRoutes;