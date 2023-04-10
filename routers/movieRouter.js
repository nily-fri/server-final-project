import express from "express";
import movieBL from "../models/moviesBL.js";

const router = express.Router();

router.get("/", async (req, res) => {
	const movies = await movieBL.getAllMovies();

	res.json(movies);
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const movie = await movieBL.getMovieData(id);
	res.json(movie);
});

router.get("/name/:name", async (req, res) => {
	const resp = await movieBL.getMovieByName(req.params.name);
	res.json(resp);
});

router.post("/", async (req, res) => {
	let movie = req.body;
	try {
		let m = await movieBL.addMovie(movie);
		res.json(m);
	} catch (err) {
		res.json({ message: err });
	}
});

router.patch("/:id", async (req, res) => {
	let id = req.params.id;
	let movie = req.body;
	try {
		let m = await movieBL.updateMovie(id, movie);
		res.json(m);
	} catch (err) {
		console.log(err.stack.split("\n")[0] + "\n" + err.stack.split("\n")[1]);
		res.json({ message: err.message });
	}
});

router.delete("/:id", async function (req, res) {
	let id = req.params.id;

	await movieBL.deleteMovie(id);

	return res.send("movie deleted");
});

router.get("/find/:findValue", async function (req, res) {
	let findValue = req.params;
	try {
		let r = await movieBL.findMovie(findValue);
		return res.json(r);
	} catch (err) {
		console.log(err.stack.split("\n")[0] + "\n" + err.stack.split("\n")[1]);
		res.json({ message: err.message });
	}
	return res.json();
});

export default router;
