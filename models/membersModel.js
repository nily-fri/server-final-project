import mongoose from "mongoose";

const susbscriptionSchema = new mongoose.Schema(
	{
		moviename: { type: String, required: true },
		date: { type: Date, required: true },
	},
	{ _id: false }
);

const membersSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		city: { type: String, required: true },
		full_name: { type: String, required: true },
		subscription: { type: [susbscriptionSchema], required: true, default: [] },
	},
	{ versionKey: false }
);

const Member = mongoose.model("members", membersSchema);

export default Member;
