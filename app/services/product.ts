import IProduct from '../interfaces/product';
import ProductModel from '../models/product';
import mongoose from 'mongoose';
import { findAll, save } from './common-service';

export const saveProduct = async (product: IProduct): Promise<IProduct> => {
    try {
        
        const savedProduct: IProduct = await save(ProductModel, product);
        
        return savedProduct;

    } catch (err) {
        throw err;
    }
};

export const findAllProducts = async (): Promise<Array<IProduct>> => {
    try {
        const products: Array<IProduct> = await findAll(ProductModel);
        return products;
    } catch (err) {
        throw err;
    }
};
