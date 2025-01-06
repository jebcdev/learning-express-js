import { mockDatabase } from "../database/database.js";

const users = mockDatabase;

const getAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) {
        return user;
    } else {
        return null;
    }
};

const createUser = (user) => {
    user.id = users.length + 1;
    users.push(user);
    return user;
};

const updateUser = (id, user) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        user.id = id;
        users[index] = user;
        return user;
    } else {
        return null;
    }
};

const deleteUser = (id, user) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        const user = users[index];
        users.splice(index, 1);
        return user;
    } else {
        return null;
    }
};

export const userModel = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
