const express = require('express');
const path = require('path');
require('./database');
const cors = require('cors');

const app = express();


// Middlewares
// app.use(cors(
//     {
//         origin: ['https://my-notes-5fv4.onrender.com']
//     }
// ));
//app.use(cors())
// app.options('*', cors())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


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