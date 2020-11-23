import {Model} from 'mongoose';

export const save = (model: Model<any>, data: any) => {
    return model.create(data);
};

export const findOne = (model: Model<any>, params: any) => {
    return model.findOne(params);
};

export const findAll = (model: Model<any>) => {
    return model.find();
};
