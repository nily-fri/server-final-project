import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
	full_name: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model("users", usersSchema);

export default User;
