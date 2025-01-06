import { userModel } from "../models/user.model.js";

const getAllUsers = (req, res) => {
    const users = userModel.getAllUsers();
    if (users.length === 0) {
        res.status(404).json({ message: "No users found" });
    } else {
        res.status(200).json({
            message: "Users List",
            data: users,
        });
    }
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = userModel.getUserById(id);

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

const createUser = (req, res) => {
    try {
        const userData = req.body;
        const newUser = userModel.createUser(userData);

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

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    const userData = req.body;

    const updatedUser = userModel.updateUser(id, userData);

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

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedUser = userModel.deleteUser(id);

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
