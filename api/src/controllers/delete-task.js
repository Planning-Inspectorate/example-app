import logger from '../lib/logger.js';
import { deleteTaskData } from '../database/repositories/todo.repository.js';

/**
 * Delete task data from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function deleteTask (req, res) {
    try {
        const taskId = req.params.taskId;
        const results = await deleteTaskData(taskId);
        (res.status(204).json(results));
    }
    catch (error){
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};