import express from 'express';
import { IToken } from '../interfaces/auth';
import {login} from '../services/auth';

const router: express.Router = express.Router();

router.post('/login', async (req, res, next) => {
    const tokenDTO: IToken | void = await login(req, res, next);
    if (typeof tokenDTO === 'object') {
        res.status(200).json(tokenDTO);
    }
});

export default router;
