import connection from '../database/sql/sql-connection.js';
import logger from '../src/lib/logger.js';

export async function getTaskData (req, res) {
    try {
        const taskId = req.params.taskId;
        const results = await connection.query('SELECT * FROM to_do WHERE id = ?', taskId);
        res.status(200).json(results);
    } 
    catch (error) {
        logger.error('Error fetching task:', error);
        res.status(500).send('Internal server error');
    }
};