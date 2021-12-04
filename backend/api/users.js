const express = require('express');
const router = express.Router()

const User = require('../models/user');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    const dbUser = req.body;

    User.create(dbUser, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

router.put("/", (req, res) => {
    const filter = { username: req.body.username };
    const update = { notes: req.body.notes };

    if (req.body.username == "") {
        // do not save
    } else {
        User.findOneAndUpdate(filter, update, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        });
    }
});

module.exports = router