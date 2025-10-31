import logger from '../lib/logger.js';
import { getTaskData} from '../database/repositories/todo.repository.js';

/**
 * Get specific task data from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function getTask (req, res) {
    try {
        const taskId = req.params.taskId;
        const results = await getTaskData(taskId);
        res.status(200).json(results);
    } 
    catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};
