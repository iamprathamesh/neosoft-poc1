import express from 'express';
import {findOne} from '../handlers/common-handler';
import userModel from '../models/user';
import IUser from '../interfaces/user';
import {getToken} from '../util/auth';
import {IToken} from '../interfaces/auth';
import {IError} from '../interfaces/error';

const router: express.Router = express.Router();

router.post('/login', (req, res, next) => {
    const loginCreds: IUser = {
        email: req.body.email,
        password: req.body.password,
    };

    findOne(userModel, loginCreds).then((data) => {
        if (data) {
            const user: IUser = {
                _id: data._id,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                roles: data.roles,
            };
            const token: IToken = {
                token: 'Bearer ' + getToken(user),
            };
            res.status(200).json(token);
        } else {
            const err: IError = {
                status: 403,
                message: 'Invalid email or password',
            };
            next(err);
        }
    }).catch((err) => {
        next(err);
    });
});

export default router;
