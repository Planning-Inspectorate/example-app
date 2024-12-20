import connection from '../database/sql/sql-connection.js';

export async function getAllTaskData(req, res) {
    try {
        const results = await connection.query('SELECT * FROM to_do');
        res.status(200).json(results);
    }
    catch (error) {
        console.error('Error fetching all tasks:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};








