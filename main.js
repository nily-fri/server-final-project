import express from "express";
import db from "./configs/db.js";
import movieRouter from "./routers/movieRouter.js";
import memberRouter from "./routers/memberRouter.js";
import cors from "cors";
import authController from "./models/authController.js";

const connectDB = db;

const app = express();
const port = 8080;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/login", authController);
app.use("/api/movies", movieRouter);
app.use("/api/members", memberRouter);

app.listen(port, () => {
	console.log(`app is listening at: http://localhost:${port}`);
});
