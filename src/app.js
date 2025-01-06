import "dotenv/config";
import cors from "cors";

import express from "express";

const PORT = process.env.APP_PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json("Hello, Wold! From GET");
})
    .post("/", (req, res) => {
        const data = req.body;
        res.status(200).json({
            message: "Hello, Wold! From POST",
            body: data,
        });
    })
    .patch("/", (req, res) => {
        res.status(200).json({
            message: "Hello, Wold! From PATCH",
        });
    })
    .put("/", (req, res) => {
        res.status(200).json({
            message: "Hello, Wold! From PUT",
        });
    })
    .delete("/", (req, res) => {
        res.status(200).json({
            message: "Hello, Wold! From DELETE",
        });
    });

app.listen(PORT, () => {
    console.log(`Server Running On: http://localhost:${PORT}`);
});
