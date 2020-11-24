import express from 'express';
import mongoose from 'mongoose';
import {save, findAll} from '../services/common-service';
import IProduct from '../interfaces/product';
import ProductModel from '../models/product';
import {verifyToken} from '../util/auth';
import { findAllProducts, saveProduct } from '../services/product';

const router: express.Router = express.Router();

router.post('/save', verifyToken, async (req, res, next) => {
    const product: IProduct | undefined = await saveProduct(req, res, next);
    if (typeof product === 'object') {
        res.status(201).json(product);
    }
});

router.get('/findAll', verifyToken, async (req, res, next) => {
    const products: Array<IProduct> | undefined = await findAllProducts(req, res, next);
    if (typeof products === 'object') {
        res.status(200).json(products);
    }
});

export default router;
