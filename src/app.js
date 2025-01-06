import "dotenv/config";
import cors from "cors";

import express from "express";
import appRoutes from "./routes/_app.routes.js";

const PORT = process.env.APP_PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);

app.listen(PORT, () => {
    console.log(`Server Running On: http://localhost:${PORT}`);
});
