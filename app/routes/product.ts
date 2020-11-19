import express from 'express';
import mongoose from 'mongoose';
import {save} from '../handlers/common-handler';
import Product from '../interfaces/product';
import ProductModel from '../models/product';

const router: express.Router = express.Router();

router.post('/save', (req, res, next) => {
    const product: Product = {
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        thumbnail: req.body.thumbnail,
        price: req.body.price,
        maxPrice: req.body.maxPrice,
        rating: req.body.rating,
    };

    save(ProductModel, product).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        next(err);
    });
});

export default router;
