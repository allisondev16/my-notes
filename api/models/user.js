const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Model
const userSchema = new Schema({
    username: String,
    password: String,
    notes: [
        {
            title: String,
            content: String
        }
    ]
});

module.exports = mongoose.model("User", userSchema);