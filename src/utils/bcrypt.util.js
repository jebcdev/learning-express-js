import bcrypt from "bcryptjs";

const BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT);

const HashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(BCRYPT_SALT);
        
        const hashedPassword = await bcrypt.hash(password, salt);

        if (!hashedPassword)
            return console.log(
                "Error hashing password",
                hashedPassword
            );

        return hashedPassword;
    } catch (error) {
        console.log(error);
        throw new Error("Error hashing password");
    }
};

const ComparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compareSync(
            password,
            hashedPassword
        );

        return isMatch;
    } catch (error) {
        console.log(error);
        throw new Error("Error comparing password");
    }
};

export const BcryptUtil = {
    HashPassword,
    ComparePassword,
};
