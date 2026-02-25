import express  from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger-output.json' with { type: 'json' };

import { getAllTasks } from '../controllers/get-all-tasks.js';
import { getTask } from '../controllers/get-task.js';
import { addTask } from '../controllers/add-task.js';
import { deleteTask } from '../controllers/delete-task.js';

// create an express router for handling different paths within the API
const apiRouter = express.Router();

// set up the Swagger UI for API documentation
apiRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// set up the handlers for the API endpoints and Swagger documentation
apiRouter.get(
    '/tasks',
    /*
        #swagger.tags = ['Tasks']
        #swagger.path = '/tasks'
        #swagger.description = 'Get all tasks'
    */
    getAllTasks
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
    getTask
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
    addTask
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
    deleteTask
);

export { apiRouter };