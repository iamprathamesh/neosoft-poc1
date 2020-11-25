import express from 'express';
import mongoose from 'mongoose';
import {save, findAll} from '../services/common-service';
import IUser from '../interfaces/user';
import userModel from '../models/user';
import {verifyToken} from '../util/auth';
import { findAllUsers, saveUser } from '../services/user';

const router: express.Router = express.Router();

router.post('/save', async (req, res, next) => {
    try {
        const user: IUser = {
            _id: mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            roles: ['user'],
            password: req.body.password,
        };
    
        const savedUser: IUser = await saveUser(user);

        if (typeof user === 'object') {
            res.status(201).json(savedUser);
        }
    } catch (err) {
        next(err);
    }
    
});

router.get('/findAll', verifyToken, async (req, res, next) => {
    try {
        const users : Array<IUser> = await findAllUsers();
        if (typeof users === 'object') {
            res.status(200).json(users);
        }
    } catch (err) {
        next(err);
    }
});

export default router;
