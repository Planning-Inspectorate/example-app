import logger from '../../../src/lib/logger.js';
import connection from './sql-connection.js';

/**
 * Create the to_do table if it doesn't exist
 * @returns {Promise<void>}
 */
async function createTable () {
    await connection.query(
        `CREATE TABLE IF NOT EXISTS to_do (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            userId INT, 
            createdAt TIMESTAMP, 
            updatedAt TIMESTAMP, 
            completeBy TIMESTAMP, 
            title VARCHAR(255), 
            description VARCHAR(255), 
            priority INT
        )`
    );
}

createTable()
    .then(async () => {
        await connection.end();
        logger.info('Table created');
    })
    .catch(async (error) => {
        await connection.end();
        logger.error(`Error creating table: ${error}`);
    });
