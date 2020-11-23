import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user';
import productRoute from './routes/product';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import authRoute from './routes/auth';
import swaggerOptions from '../config/swagger';

const app: express.Application = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_DATASOURCE!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const swaggerDocs: object = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));

app.get('/', (req, res, next) => {
    res.status(200).json({
        'message': 'Server successfully started',
    });
});

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/product', productRoute);

app.use((err: any, req: any, res: any, next: any) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message,
        },
    });
});

export default app;
