const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, "Pls enter your email address"],
			trim: true,
			unique: true,
		},
		phone: {
			type: String,
			required: [true, "Pls enter your phone number"],
			trim: true,
			unique: true,
		},
		name: {
			type: String,
			required: [true, "Pls enter your name"],
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Pls enter your password"],
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);


module.exports = mongoose.model("Users", userModel)
