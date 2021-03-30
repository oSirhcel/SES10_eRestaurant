const mongoose = require('mongoose');

const db = "mongodb+srv://admin:SoftwareStudio10@cluster0.92wg5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;