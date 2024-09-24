const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    myFlights: {
        type: Array,
        required: true,
        default: []
    }
})
const User = mongoose.model("User",UserSchema);

module.exports = User;