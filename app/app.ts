import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user';

mongoose.connect(process.env.MONGO_DATASOURCE!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const app: express.Application = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        'message': 'Server successfully started!',
    });
});

app.use('/user', userRoute);

app.use((err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
        },
    });
});

export default app;
