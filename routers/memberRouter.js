import express from "express";
import memberBL from "../models/membersBL.js";

const router = express.Router();

router.get("/", async (req, res) => {
	const members = await memberBL.getAllMembers();

	res.json(members);
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const member = await memberBL.getMemberData(id);
	res.json(member);
});

router.delete("/deleteMovieForMember/:name", async (req, res) => {
	const resp = await memberBL.getMemberByMovie(req.params.name);
	res.json(resp);
});

router.post("/", async (req, res) => {
	let member = req.body;
	try {
		await memberBL.addMember(member);
		res.send("created");
	} catch (err) {
		res.json({ message: err });
	}
});

router.patch("/:id", async (req, res) => {
	let id = req.params.id;
	let member = req.body;
	try {
		const item = await memberBL.updateMember(id, member);
		res.send(item);
	} catch (err) {
		console.log(err.stack.split("\n")[0] + "\n" + err.stack.split("\n")[1]);
		res.json({ message: err.message });
	}
});

router.delete("/:id", async function (req, resp) {
	let id = req.params.id;

	await memberBL.deleteMember(id);

	return resp.send("deleted");
});

export default router;
