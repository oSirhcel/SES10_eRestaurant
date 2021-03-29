const express = require("express");
const mongoose = require("mongoose");
const api = require('./routes/api');

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV != "prod") {
  require("dotenv").config();
}

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello world! Express is here with the help with nodemon.");
});



try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("MongoDB connected");
} catch (error) {
  console.log(error)
}

app.use('/login', api);

app.use((req, res, next) => {
  res.send("Welcome to Express");
  next();
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
