import express from 'express';
import bodyParser from 'body-parser';
import { apiRouter } from './routes/router.js';

export function createApp() {
    // create an Express app for the API
    const app = express();

    // configure body-parser to parse JSON requests
    app.use(bodyParser.json());

    // register the API router, which will handle all API routes
    app.use('/', apiRouter);

    return app;
}
