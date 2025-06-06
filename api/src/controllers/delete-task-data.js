import connection from '../database/sql/sql-connection.js';
import logger from '../lib/logger.js';

/**
 * Delete task data from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function deleteTaskData (req, res) {
    try {
        const taskId = req.params.taskId;
        const results = await connection.query('DELETE FROM to_do WHERE id = ?', taskId);
        (res.status(204).json(results));
    }
    catch (error){
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};