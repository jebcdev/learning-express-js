import { Router } from "express";

import { userController } from "../controllers/user.controller.js";


const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.patch("/:id/update", userController.updateUser);
userRoutes.delete("/:id/delete", userController.deleteUser);


export default userRoutes;