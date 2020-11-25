import {findOne} from './common-service';
import UserModel from '../models/user';
import { ILogin, IToken } from '../interfaces/auth';
import IUser from '../interfaces/user';
import { getToken } from '../util/auth';
import { IError } from '../interfaces/error';

export const login = async (loginCreds: ILogin) : Promise<IToken> => {
    try {

        const tokenDTO: IToken = {
            token: 'No Token',
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
    
            tokenDTO.token = 'Bearer ' + getToken(userData);

        } else {
            const err: IError = {
                status: 403,
                message: 'Invalid email or password',
            };
            
            throw err;
        }

        return tokenDTO;
        
    } catch (err) {
        throw err;
    }
};
