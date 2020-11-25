import {save, findAll} from './common-service';
import mongoose from 'mongoose';
import IUser from '../interfaces/user';
import userModel from '../models/user';

export const saveUser = async (user: IUser): Promise<IUser> => {
    try {
        const savedUser: IUser = await save(userModel, user)

        return savedUser;

    } catch (err) {
        throw err;
    }
};

export const findAllUsers = async (): Promise<Array<IUser>> => {
    try {
        const users: Array<IUser> = await findAll(userModel);
        return users; 
    } catch (err) {
        throw err;
    }
};
