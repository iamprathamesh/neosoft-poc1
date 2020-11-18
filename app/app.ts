import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_DATASOURCE!);

const app: express.Application = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        'message': 'Server successfully started',
    });
});

export default app;
