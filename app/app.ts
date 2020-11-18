import express from 'express';

const app: express.Application = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        'message': 'Server successfully started',
    });
});

export default app;
