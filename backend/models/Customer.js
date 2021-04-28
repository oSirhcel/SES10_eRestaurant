const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        require: true
    },
    phone: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:  String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('customer', CustomerSchema);
