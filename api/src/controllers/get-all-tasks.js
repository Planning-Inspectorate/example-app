import logger from '../lib/logger.js';
import { getAllTaskData} from '../database/repositories/todo.repository.js';

/**
 * Get all task data from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function getAllTasks(req, res) {
    try {
        const results = await getAllTaskData();
        res.status(200).json(results);
    }
    catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};








