import express from 'express';
import mongoose from 'mongoose';
import {save, find} from '../handlers/common-handler';
import IUser from '../interfaces/user';
import userModel from '../models/user';
import {verifyToken} from '../util/auth';

const router: express.Router = express.Router();

router.post('/save', (req, res, next) => {
    const user: IUser = {
        _id: mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        roles: ['user'],
        password: req.body.password,
    };

    save(userModel, user).then((user) => {
        res.status(201).json(user);
    }).catch((err) => {
        next(err);
    });
});

router.get('/find', verifyToken, (req, res, next) => {
    find(userModel).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        next(err);
    });
});

export default router;
