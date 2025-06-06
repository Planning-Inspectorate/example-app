import logger from '../../../src/lib/logger.js';
import connection from './sql-connection.js';

const createToDoTable = 'CREATE TABLE IF NOT EXISTS to_do (id INT AUTO_INCREMENT, userId INT, createdAt TIMESTAMP, updatedAt TIMESTAMP, completeBy TIMESTAMP, title VARCHAR(255), description VARCHAR(255), priority INT, PRIMARY KEY (id))';

/**
 * Create the to_do table if it doesn't exist
 * @returns {Promise<void>}
 */
async function createTable() {
    try {
        const [result] = await connection.query(createToDoTable);
        logger.info('Table created');
    } catch (error) {
        logger.error('Error creating table:', error);
        throw error;
    }

    await connection.end();
}

createTable();
