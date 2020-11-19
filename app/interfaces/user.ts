import mongoose from 'mongoose';

export default interface User {
    _id: mongoose.Types.ObjectId,
    firstname: string,
    lastname: string,
    roles: Array<string>,
    email: string,
    password: string
};
