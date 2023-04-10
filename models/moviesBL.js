import Movie from "./moviesModel.js";

const getAllMovies = async () => {
	let resp = await Movie.find({});
	return resp;
};

const getMovieData = async (id) => {
	return Movie.findById({ _id: id });
};

const getMovieByName = async (name) => {
	return Movie.findOne({ name })
}

const addMovie = async (mv) => {
	const newMovie = new Movie(mv);
	await newMovie.save();
	return newMovie;
};

const updateMovie = async (id, movie) => {
	await Movie.findByIdAndUpdate(id, movie);
	return movie;
};

const deleteMovie = async (id) => {
	await Movie.findByIdAndRemove(id);
};

const findMovie = async (s) => {
	let searchValue = Object.values(s);

	searchValue = searchValue.toString();

	let arr = await Movie.find({
		name: { $regex: searchValue, $options: "i" },
	});
	return arr;
};

export default {
	getAllMovies,
	getMovieData,
	getMovieByName,
	addMovie,
	updateMovie,
	deleteMovie,
	findMovie,
};
