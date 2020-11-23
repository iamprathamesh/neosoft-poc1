import express from 'express';
import mongoose from 'mongoose';
import {save, findAll} from '../handlers/common-handler';
import IProduct from '../interfaces/product';
import ProductModel from '../models/product';
import {verifyToken} from '../util/auth';

const router: express.Router = express.Router();

router.post('/save', verifyToken, (req, res, next) => {
    const product: IProduct = {
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        price: req.body.price,
        maxPrice: req.body.maxPrice,
        rating: req.body.rating,
    };

    save(ProductModel, product).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        next(err);
    });
});

router.get('/find', verifyToken, (req, res, next) => {
    findAll(ProductModel).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        next(err);
    });
});

export default router;
