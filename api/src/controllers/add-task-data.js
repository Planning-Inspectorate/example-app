import connection from '../database/sql/sql-connection.js';
import logger from '../lib/logger.js';

/**
 * Add task data to the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function addTaskData (req, res) {
    try {
        const task = req.body;
        const { taskDeadlineFriendly, title, description, priority } = task;

        const results = await connection.query('INSERT INTO to_do (completeBy, title, description, priority) VALUES (?, ?, ?, ?)', [taskDeadlineFriendly, title, description, priority]);
        res.status(201).json(results);
    }
    catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};