import express from 'express';
import mongoose from 'mongoose';
import {save, findAll} from '../services/common-service';
import IUser from '../interfaces/user';
import userModel from '../models/user';
import {verifyToken} from '../util/auth';
import { findAllUsers, saveUser } from '../services/user';

const router: express.Router = express.Router();

router.post('/save', async (req, res, next) => {
    const user: IUser | undefined = await saveUser(req, res, next);
    if (typeof user === 'object') {
        res.status(201).json(user);
    }
});

router.get('/findAll', verifyToken, async (req, res, next) => {
    const users : Array<IUser> | undefined = await findAllUsers(req, res, next);
    if (typeof users === 'object') {
        res.status(200).json(users);    
    }
});

export default router;
