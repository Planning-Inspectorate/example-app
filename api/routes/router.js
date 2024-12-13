import express  from 'express';

import { getAllTaskData } from '../controllers/get-all-task-data.js';
import { getTaskData } from '../controllers/get-task-data.js';
import { addTaskData } from '../controllers/add-task-data.js';
import { deleteTaskData } from '../controllers/delete-task-data.js';

const apiRouter = express.Router();

apiRouter.get('/tasks', getAllTaskData);

apiRouter.get('/tasks/:taskId', getTaskData);

apiRouter.post('/tasks', addTaskData);

apiRouter.delete('/tasks/:taskId', deleteTaskData);

export { apiRouter };