import connection from '../database/sql/sql-connection.js';
import logger from '../lib/logger.js';

/**
 * Get specific task data from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function getTaskData (req, res) {
    try {
        const taskId = req.params.taskId;
        const results = await connection.query('SELECT * FROM to_do WHERE id = ?', taskId); 
        res.status(200).json(results);
    } 
    catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};
