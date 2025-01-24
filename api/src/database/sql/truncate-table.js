import logger from '../../../src/lib/logger.js';
import connection from './sql-connection.js';

const truncateToDoTable = 'TRUNCATE TABLE to_do';

async function truncateTable() {
    try {
        const [result] = await connection.query(truncateToDoTable);
        logger.info('Table truncated');
    } catch (error) {
        logger.error('Error truncating table:', error);
        throw error;
    }

    connection.end();
}

truncateTable();
