import logger from '../../../src/lib/logger.js';
import connection from './sql-connection.js';

/**
 * Truncate the to_do table
 * @returns {Promise<void>}
 */
async function truncateTable () {
    await connection.query('TRUNCATE TABLE to_do');
}

truncateTable()
    .then(async () => {
        await connection.end();
        logger.info('Table truncated');
    })
    .catch(async (error) => {
        await connection.end();
        logger.error(`Error truncating table: ${error}`);
    });
