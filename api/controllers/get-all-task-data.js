import connection from '../database/sql/sql-connection.js';
import logger from '../src/lib/logger.js';

export async function getAllTaskData(req, res) {
    try {
        const results = await connection.query('SELECT * FROM to_do');
        res.status(200).json(results);
    }
    catch (error) {
        logger.error('Error fetching all tasks:', error);
        res.status(500).send('Internal server error');
    }
};








