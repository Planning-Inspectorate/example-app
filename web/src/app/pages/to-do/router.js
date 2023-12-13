import express from 'express';

import { toDoMiddleware } from './_middleware/to-do.middleware.js';

//controllers
import { getToDoStart }  from './start/start.controller.js';
import { getToDoList } from './list/list.controller.js';
import { getTaskName, postTaskName } from './task-name/task-name.controller.js';
import { getTaskContent, postTaskContent } from './task-content/task-content.controller.js';
import { getTaskPriority, postTaskPriority } from './task-priority/task-priority.controller.js';
import { getTaskDeadline, postTaskDeadline } from './task-deadline/task-deadline.controller.js';
import { getCheckAnswers, postCheckAnswers } from './check-answers/check-answers.controller.js';
import { getTask, postTask } from './task/task.controller.js';

//validators
import { taskNameValidator } from './task-name/task-name-validator.js';
import { taskPriorityValidator } from './task-priority/task-priority-validator.js';
import { validationErrorHandler } from '../../validators/validation-error-handler.js';


const toDoRouter = express.Router();

toDoRouter.get('/', toDoMiddleware, getToDoStart)

toDoRouter.get('/list', toDoMiddleware, getToDoList )

toDoRouter
    .get('/task/:taskId', toDoMiddleware, getTask)
    .post('/task/:taskId', toDoMiddleware, postTask)

toDoRouter
    .get('/task-name', toDoMiddleware, getTaskName)
    .post('/task-name', toDoMiddleware, taskNameValidator(), validationErrorHandler, postTaskName)

toDoRouter
    .get('/task-content', toDoMiddleware, getTaskContent)
    .post('/task-content', toDoMiddleware, postTaskContent)

toDoRouter
    .get('/task-priority', toDoMiddleware, getTaskPriority)
    .post('/task-priority', toDoMiddleware, taskPriorityValidator(), validationErrorHandler, postTaskPriority)

toDoRouter
    .get('/task-deadline', toDoMiddleware, getTaskDeadline)
    .post('/task-deadline', toDoMiddleware, postTaskDeadline)

toDoRouter
    .get('/check-answers', toDoMiddleware, getCheckAnswers)
    .post('/check-answers', toDoMiddleware, postCheckAnswers)

export { toDoRouter }