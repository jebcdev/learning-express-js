import z from "zod";

const create = z.object({
    name: z
        .string({
            required_error: "Name Is Required",
            invalid_type_error: "Name Must Be a String",
            message: "Name Is Required And Must Be a String",
        })
        .min(5)
        .max(100),
    surname: z
        .string({
            required_error: "Surmame Is Required",
            invalid_type_error: "Surmame Must Be a String",
            message: "Surmame Is Required And Must Be a String",
        })
        .min(5)
        .max(100),

    email: z.string().email(),
});

const update = z.object({
    name: z
        .string({
            required_error: "Name Is Required",
            invalid_type_error: "Name Must Be a String",
            message: "Name Is Required And Must Be a String",
        })
        .min(5)
        .max(100)
        .optional(true),

    surname: z
        .string({
            required_error: "Surmame Is Required",
            invalid_type_error: "Surmame Must Be a String",
            message: "Surmame Is Required And Must Be a String",
        })
        .min(5)
        .max(100)
        .optional(true),

    email: z.string().email().optional(true),
});

export const userSchema = {
    create,
    update,
};
