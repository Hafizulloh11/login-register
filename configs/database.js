const mongoose = require("mongoose");

const connectBase = () => {
	mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
		})
		.then((data) => {
			console.log(`Mongoose connected width: ${data.connection.host}`);
		});
};

module.exports = connectBase;
