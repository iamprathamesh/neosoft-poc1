import {Model} from 'mongoose';

export const save = (model: Model<any>, data: any) => {
    return model.create(data);
};
