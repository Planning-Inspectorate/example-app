import express from 'express';
import { getToDoStart }  from './start/start.controller.js';
import { examplesMiddleware } from './middleware/to-do.middleware.js';


const toDoRouter = express.Router();

toDoRouter.get('/', examplesMiddleware, getToDoStart)

export { toDoRouter }