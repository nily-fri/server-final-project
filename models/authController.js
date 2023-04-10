import express from "express";
import User from "./usersModel.js";

var router = express.Router();

router.post("/", async function (req, res) {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (user) {
			const result = req.body.password === user.password;
			if (result) {
				res.status(200).send(user.full_name);
			} else {
				res.status(400).json({ error: "incorrect" });
			}
		} else {
			res.status(400).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

export default router;
