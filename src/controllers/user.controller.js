import { PrismaClient } from "@prisma/client";
import { BcryptUtil } from "../utils/bcrypt.util.js";

const DbClient = new PrismaClient();

const getAllUsers = async (req, res) => {
    const users = await DbClient.user.findMany();

    if (users.length === 0) {
        res.status(404).json({ message: "No users found" });
    } else {
        res.status(200).json({
            message: "Users List",
            data: users,
        });
    }
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    const user = await DbClient.user.findUnique({
        where: {
            id: id,
        },
    });

    if (!user) {
        res.status(404).json({
            message: "User not found",
            data: null,
        });
    } else {
        res.status(200).json({
            message: "User Details",
            data: user,
        });
    }
};

const createUser = async (req, res) => {
    try {
        const userData = req.body;

        userData.password = await BcryptUtil.HashPassword(
            userData.password
        );

        const newUser = await DbClient.user.create({
            data: userData,
        });

        if (!newUser) {
            return res.status(400).json({
                message: "User not created",
                data: null,
            });
        } else {
            return res.status(201).json({
                message: "User created",
                data: newUser,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "Error While Creating User...",
            data: error,
        });
    }
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);

    const userData = req.body;

    if (userData.password)
        userData.password = await BcryptUtil.HashPassword(
            userData.password
        );

    const updatedUser = await DbClient.user.update({
        where: { id: id },
        data: userData,
    });

    if (!updatedUser) {
        return res.status(400).json({
            message: "User not updated",
            data: null,
        });
    } else {
        return res.status(200).json({
            message: "User updated",
            data: updatedUser,
        });
    }
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);

    const deletedUser = await DbClient.user.delete({
        where: { id: id },
    });

    if (!deletedUser) {
        return res.status(400).json({
            message: "User not deleted",
            data: null,
        });
    } else {
        {
            return res.status(200).json({
                message: "User deleted",
                data: deletedUser,
            });
        }
    }
};

export const userController = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
