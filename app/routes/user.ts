import express from 'express';
import { save } from '../handlers/common-handler';
import User from '../interfaces/user';
import userModel from '../models/user';

const router: express.Router = express.Router();

router.post('/save', (req, res, next) => {
    const user: User = {
        firstname: 'TestUser',
        lastname: 'TestUser',
        email: 'testuser@gmail.com',
        roles: ['user'],
        password: 'pwd123'
    };

    save(userModel, user).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        next(err);
    });
});

export default router;