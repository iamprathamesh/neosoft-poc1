import express from 'express';
import mongoose from 'mongoose';
import {save, findAll} from '../services/common-service';
import IProduct from '../interfaces/product';
import ProductModel from '../models/product';
import {verifyToken} from '../util/auth';
import { findAllProducts, saveProduct } from '../services/product';

const router: express.Router = express.Router();

router.post('/save', verifyToken, async (req, res, next) => {
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

        const savedProduct: IProduct = await saveProduct(product);
        if (typeof product === 'object') {
            res.status(201).json(savedProduct);
        }
    } catch (err) {
        next(err);
    }
});

router.get('/findAll', verifyToken, async (req, res, next) => {
    try {
        const products: Array<IProduct> = await findAllProducts();
        if (typeof products === 'object') {
            res.status(200).json(products);
        }
    } catch (err) {
        next(err);
    }
});

export default router;
