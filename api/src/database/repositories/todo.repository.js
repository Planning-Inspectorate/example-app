import connection from '../sql/sql-connection.js';

// call the database to add, delete or get task data using SQL commands
export function addTaskData (taskDeadlineFriendly, title, description, priority) {
    return connection.query(
        'INSERT INTO to_do (completeBy, title, description, priority) VALUES (?, ?, ?, ?)',
        [taskDeadlineFriendly, title, description, priority]
    );
}

export function deleteTaskData (taskId) {
    return connection.query(
        'DELETE FROM to_do WHERE id = ?',
        taskId
    );
}

export function getAllTaskData (){
    return connection.query(
        'SELECT * FROM to_do'
    );
}

export function getTaskData (taskId) {
    return connection.query(
        'SELECT * FROM to_do WHERE id = ?',
        taskId
    );
}
