import { Schema, model } from 'mongoose';

// Create Model
const userSchema = new Schema({
    username: String,
    notes: [
        {
            title: String,
            content: String
        }
    ]
});

export default model("User", userSchema);