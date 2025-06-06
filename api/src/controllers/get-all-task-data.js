import connection from '../database/sql/sql-connection.js';
import logger from '../lib/logger.js';

/**
 * Get all task data from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function getAllTaskData(req, res) {
    try {
        const results = await connection.query('SELECT * FROM to_do');
        res.status(200).json(results);
    }
    catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};








