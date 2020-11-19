import mongoose from 'mongoose';

const user: mongoose.Schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 11,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 11,
    },
    roles: [
        {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
            minlength: 3,
            maxlength: 11,
        },
    ],
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 5,
        maxlength: 50,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
        ],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 50,
    },
});

export default mongoose.model('users', user);
