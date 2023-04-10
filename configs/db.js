import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDB = () => {
	mongoose
		.connect(
			"mongodb+srv://nilifri:MWTBcu5Tofd96TSV@nilymongodb.jrz19fq.mongodb.net/niliDB"
		)
		.then(() => console.log("Connected to niliDB!"))
		.catch((error) => console.log(error));
};

export default connectDB;
