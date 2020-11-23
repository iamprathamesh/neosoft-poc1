import mongoose from 'mongoose';

export default interface IProduct {
    _id: mongoose.Types.ObjectId,
    name: string,
    description: string,
    price: number,
    maxPrice: number,
    thumbnail: string,
    rating: number
}
