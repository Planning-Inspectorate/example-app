import connection from '../../api/sql-connection.js';

export async function deleteTaskData (req, res) {
    try {
        const taskId = req.params.taskId;
        const results = await connection.query('DELETE FROM to_do WHERE id = ?', taskId);
        res.status(200).json(results);
    }
    catch (error){
        console.error('Error deleting task:', error);
        res.status(500).send('Internal server error');
    }
};