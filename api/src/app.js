import express from 'express';
import bodyParser from 'body-parser';
import { apiRouter } from './routes/router.js';

const app = express();

app.use(bodyParser.json());
app.use('/api', apiRouter);

export { app };