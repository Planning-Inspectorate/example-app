import connection from '../database/sql/sql-connection.js';
import getTaskDeadlineDateInput from '../src/lib/get-task-deadline-date-input.js';
import logger from '../src/lib/logger.js';

export async function addTaskData (req, res) {
    try {
        const task = req.body;
        const { taskDeadline, title, description, priority } = task;
        
        const formattedTaskDeadline = getTaskDeadlineDateInput(taskDeadline);

        const results = await connection.query('INSERT INTO to_do (completeBy, title, description, priority) VALUES (?, ?, ?, ?)', [formattedTaskDeadline, title, description, priority]);
        res.status(201).json(results);
    }
    catch (error) {
        logger.error(error);
        res.status(500).send('Internal server error');
    }
};