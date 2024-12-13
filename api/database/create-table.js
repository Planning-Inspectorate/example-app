import logger from '../../web/src/util/logger.js';
import connection from '../sql-connection.js';

const createToDoTable = 'CREATE TABLE IF NOT EXISTS to_do (id INT AUTO_INCREMENT, userId INT, createdAt TIMESTAMP, updatedAt TIMESTAMP, completeBy TIMESTAMP, title VARCHAR(255), description VARCHAR(255), priority INT, PRIMARY KEY (id))';

async function createTable() {
    try {
        const [result] = await connection.query(createToDoTable);
        logger.info('To do table created');
    } catch (error) {
        logger.error('Error creating to do table:', error);
        throw error;
    }
}

createTable();
