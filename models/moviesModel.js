import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema(
	{
		//	_id: { type: String, required: false },
		name: { type: String, required: true },
		premier_year: { type: Number, required: true },
		image: { type: String, required: true },
		genres: { type: [String], required: true },
	},
	{ versionKey: false }
);

const Movie = mongoose.model("movies", moviesSchema);

export default Movie;
