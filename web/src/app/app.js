import express from 'express';
import bodyParser from 'body-parser';
import { defaultErrorHandler } from './errors.js';
import router from './router.js';

// create an express app, and configure it for our usage
const app = express();

// configure body-parser, to populate req.body
// see https://expressjs.com/en/resources/middleware/body-parser.html
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register the router, which will define any subpaths
// any paths not defined will return 404 by default
app.use('/', router);

// catch/handle errors last
app.use(defaultErrorHandler);

export { app };