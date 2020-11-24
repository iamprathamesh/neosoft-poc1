import {findOne} from './common-service';
import UserModel from '../models/user';
import { ILogin, IToken } from '../interfaces/auth';
import IUser from '../interfaces/user';
import { getToken } from '../util/auth';
import { IError } from '../interfaces/error';

export const login = async (req: any, res: any, next: any) : Promise<IToken | undefined> => {

    try {

        const loginCreds: ILogin = {
            email: req.body.email,
            password: req.body.password,
        };

        const user = await findOne(UserModel, loginCreds);

        if (user) {
            const userData: IUser = {
                _id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                roles: user.roles,
            };
    
            const tokenDTO: IToken = {
                token: 'Bearer ' + getToken(userData)
            };

            return tokenDTO;
        }
        
        const err: IError = {
            status: 403,
            message: 'Invalid email or password',
        };
        
        next(err);

    } catch (err) {
        next(err);
    }
};
