import logger from '../../../src/lib/logger.js';
import connection from './sql-connection.js';

const seedData = 'INSERT INTO to_do (id, userId, createdAt, updatedAt, completeBy, title, description, priority) VALUES ?';
const values = [
    [1, 1, "2023-11-20 00:00:00", "2023-11-21 00:00:00", "2023-12-21 00:00:00", "Task title 1", "Task description 1", 1],
    [2, 1, "2023-11-19 00:00:00", "2023-11-20 00:00:00", "2023-12-21 00:00:00", "Task title 2", "Task description 2", 2],
    [3, 1, "2023-11-21 00:00:00", "2023-11-21 00:00:00", "2023-12-21 00:00:00", "Task title 3", "Task description 3", 3]
]

async function seedTable() {
    try {
        const [result] = await connection.query(seedData, [values]);
        logger.info('Data seeding completed');
    } catch (error) {
        logger.error('Error seeding data:', error);
        throw error;
    }

    connection.end();
}

seedTable();
