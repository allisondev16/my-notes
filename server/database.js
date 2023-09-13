const mongoose = require('mongoose');
require('dotenv').config()

const connection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.quegc.mongodb.net/notesDatabase?retryWrites=true&w=majority`;

mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));