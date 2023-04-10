import Member from "./membersModel.js";

const getAllMembers = async () => {
	let resp = await Member.find({});
	return resp;
};

const getMemberData = async (id) => {
	return Member.findById({ _id: id });
};

const getMemberByMovie = async (name) => {
	const resp = await Member.find({ "subscription.moviename": name });

	for (const obj of resp) {
		obj.subscription = obj.subscription.filter(x => x.moviename !== name)
		await updateMember(obj._id, obj)
	}
	return "done";
};

const addMember = async (mb) => {
	const newMember = new Member(mb);
	await newMember.save();
};

const updateMember = async (id, member) => {
	const item = await Member.findByIdAndUpdate(id, member, {
		new: true,
		upsert: true,
	});
	return item;
};

const deleteMember = async (id) => {
	await Member.findByIdAndRemove(id);
};

export default {
	getAllMembers,
	getMemberData,
	getMemberByMovie,
	addMember,
	updateMember,
	deleteMember,
};
