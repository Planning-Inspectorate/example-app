import express  from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger-output.json' with { type: 'json' };

import { getAllTaskData } from '../controllers/get-all-task-data.js';
import { getTaskData } from '../controllers/get-task-data.js';
import { addTaskData } from '../controllers/add-task-data.js';
import { deleteTaskData } from '../controllers/delete-task-data.js';

const apiRouter = express.Router();

apiRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

apiRouter.get(
    '/tasks',
    /*
        #swagger.tags = ['Tasks']
        #swagger.path = '/tasks'
        #swagger.description = 'Get all tasks'
    */
    getAllTaskData
);

apiRouter.get(
    '/tasks/:taskId',
    /*
        #swagger.tags = ['Tasks']
        #swagger.path = '/tasks/{taskId}'
        #swagger.description = 'Get task by ID'
        #swagger.parameters['taskId'] = {
            description: 'ID of the task',
            required: true,
            type: 'integer',
            in: 'path'
        }
    */
    getTaskData
);

apiRouter.post(
    '/tasks',
    /*
        #swagger.tags = ['Tasks']
        #swagger.path = '/tasks'
        #swagger.description = 'Add a new task'
        #swagger.parameters['task'] = {
            description: 'Task object',
            required: true,
            in: 'body',
            schema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: 'The task title',
                        example: 'Task 1'
                    },
                    description: {
                        type: 'string',
                        description: 'The task description',
                        example: 'This is a sample task description'
                    },
                    priority: {
                        type: 'string',
                        description: 'The task priority',
                        example: 'high'
                    },
                    taskDeadline: {
                        type: 'string',
                        description: 'The task deadline date',
                        example: '2023-10-01 00:00:00'
                    }
                }
            }
        }
    */
    addTaskData
);

apiRouter.delete(
    '/tasks/:taskId',
    /*
        #swagger.tags = ['Tasks']
        #swagger.path = '/tasks/{taskId}'
        #swagger.description = 'Delete task by ID'
        #swagger.parameters['taskId'] = {
            description: 'ID of the task',
            required: true,
            type: 'integer',
            in: 'path'
        }
    */
    deleteTaskData
);

export { apiRouter };