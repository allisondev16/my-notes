import { Router } from 'express';
const router = Router();

import User from '../models/user';

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

export default router;