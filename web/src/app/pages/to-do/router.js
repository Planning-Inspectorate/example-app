import express from 'express';

import { toDoMiddleware } from './middleware/to-do.middleware.js';
import { getToDoStart }  from './start/start.controller.js';
import { getToDoList } from './list/list.controller.js';



const toDoRouter = express.Router();

toDoRouter.get('/', toDoMiddleware, getToDoStart)
toDoRouter.get('/list', toDoMiddleware, getToDoList )

export { toDoRouter }