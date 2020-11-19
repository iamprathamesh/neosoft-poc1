import express from 'express';
import mongoose from 'mongoose';
import {save} from '../handlers/common-handler';
import User from '../interfaces/user';
import userModel from '../models/user';

const router: express.Router = express.Router();

router.post('/save', (req, res, next) => {
    const user: User = {
        _id: mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        roles: ['user'],
        password: req.body.password,
    };

    save(userModel, user).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        next(err);
    });
});

export default router;
