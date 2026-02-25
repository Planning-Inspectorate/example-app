import logger from '../lib/logger.js';
import { addTaskData } from '../database/repositories/todo.repository.js'

/**
 * Add task data to the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function addTask (req, res) {
    try {
        const task = req.body;
        const { taskDeadlineFriendly, title, description, priority } = task;
        const results = await addTaskData(taskDeadlineFriendly, title, description,priority)
        res.status(201).json(results);
    }
    catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};