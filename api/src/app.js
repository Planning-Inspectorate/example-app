import express from 'express';
import bodyParser from 'body-parser';
import { apiRouter } from './routes/router.js';

export function createApp() {
    const app = express();

    app.use(bodyParser.json());
    app.use('/api', apiRouter);

    return app;
}
