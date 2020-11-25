import express from 'express';
import { ILogin, IToken } from '../interfaces/auth';
import {login} from '../services/auth';

const router: express.Router = express.Router();

router.post('/login', async (req, res, next) => {
    try {
        const loginCreds: ILogin = {
            email: req.body.email,
            password: req.body.password,
        };
        
        const tokenDTO: IToken = await login(loginCreds);

        if (typeof tokenDTO === 'object') {
            res.status(200).json(tokenDTO);
        }
    } catch (err) {
        next(err);
    }
});

export default router;
