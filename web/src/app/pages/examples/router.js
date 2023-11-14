import express from 'express';
import { getExamplesStart }  from './start/controller.js';
import { examplesMiddleware } from './middleware/examples.middleware.js';


const examplesRouter = express.Router();

examplesRouter.get('/', examplesMiddleware, getExamplesStart)

export { examplesRouter }