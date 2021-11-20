import { connect } from 'mongoose';
require('dotenv').config()

const connection = `mongodb+srv://${process.env.DB_PASS}:${process.env.DB_PASS}@cluster0.quegc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

connect(connection, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));