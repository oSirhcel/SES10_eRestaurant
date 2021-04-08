const express = require("express");
const connectDB = require("./config/db");
const mongoose = require('mongoose')

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/customers', require('./routes/api/customers'));

// Selecting Port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
