import logger from '../../web/src/util/logger.js';
import connection from '../sql-connection.js';

const truncateToDoTable = 'TRUNCATE TABLE to_do';

async function truncateTable() {
    try {
        const [result] = await connection.query(truncateToDoTable);
        logger.info('To do table truncated');
    } catch (error) {
        logger.error('Error truncating to do table:', error);
        throw error;
    }
}

truncateTable();
