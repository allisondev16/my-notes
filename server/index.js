const express = require('express');
const path = require('path');
require('./database');
const cors = require('cors');

const app = express();


// Middlewares
// app.use(cors(
//     {
//         origin: "https://my-notes-frontend-two.vercel.app",
//         methods: ["POST", "GET", "PATCH", "DELETE"],
//         //credentials: true
//     }
// ));
// app.use(cors())
// app.options('*', cors())


app.use(express.json());


// API
const users = require('./api/users');
app.use('/users', users);

// API Endpoints
// app.use(express.static(path.join(__dirname, '../build')));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});