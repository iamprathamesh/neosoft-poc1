import {save, findAll} from './common-service';
import mongoose from 'mongoose';
import IUser from '../interfaces/user';
import userModel from '../models/user';

export const saveUser = async (req: any, res: any, next: any): Promise<IUser | undefined> => {
    try {
        const user: IUser = {
            _id: mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            roles: ['user'],
            password: req.body.password,
        };
    
        const savedUser: IUser = await save(userModel, user)

        return savedUser;

    } catch (err) {
        next(err);
    }
};

export const findAllUsers = async (req: any, res: any, next: any): Promise<Array<IUser> | undefined> => {
    try {
        const users: Array<IUser> = await findAll(userModel);
        return users; 
    } catch (err) {
        next(err);
    }
};
