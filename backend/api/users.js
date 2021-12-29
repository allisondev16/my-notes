const express = require('express');
const router = express.Router()

const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const userdata = await User.find();
        res.status(200).json(userdata);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/:username', getUser, (req, res) => {
    res.json(res.userdata);
})

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

router.patch("/:username", getUser, async (req, res) => {
    const filter = { username: res.userdata.username };
    const update = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(filter, update);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


//Middleware for path params

async function getUser(req, res, next) {
    let userdata;

    try {
        userdata = await User.findOne({username: req.params.username});
        if (userdata == null) {
            return res.status(400).json({message: "User not found."});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

    res.userdata = userdata;
    next();
}

module.exports = router