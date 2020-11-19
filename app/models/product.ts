import mongoose from 'mongoose';

const product = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 200,
    },
    description: {
        type: String,
        required: false,
        trim: true,
        minlength: 20,
        maxlength: 500,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPrice: {
        type: Number,
        required: false,
    },
    thumbnail: {
        type: String,
        required: false,
        trim: true,
        minlength: 10,
        maxlength: 200,
    },
    rating: {
        type: Number,
        required: false,
    },
});

export default mongoose.model('products', product);
