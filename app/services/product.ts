import IProduct from '../interfaces/product';
import ProductModel from '../models/product';
import mongoose from 'mongoose';
import { findAll, save } from './common-service';

export const saveProduct = async (req: any, res: any, next: any): Promise<IProduct | undefined> => {
    try {
        const product: IProduct = {
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            price: req.body.price,
            maxPrice: req.body.maxPrice,
            rating: req.body.rating,
        };
    
        const savedProduct: IProduct = await save(ProductModel, product);
        
        return savedProduct;

    } catch (err) {
        next(err);
    }
};

export const findAllProducts = async (req: any, res: any, next: any): Promise<Array<IProduct> | undefined> => {
    try {
        const products: Array<IProduct> = await findAll(ProductModel);
        return products;
    } catch (err) {
        next(err);
    }
};
