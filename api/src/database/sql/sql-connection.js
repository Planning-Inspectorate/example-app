import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import logger from '../../lib/logger.js';

dotenv.config({ path: './.env' })

/**
 * Create a connection to the MySQL database
 * @returns {Promise<mysql.Connection>} The MySQL connection.
 */
async function createConnection() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
        logger.info('Database connected successfully');
        return connection;
    } catch (error) {
        logger.error(`Error connecting to the database ${error}`);
        throw error;
    }
}

const connection = await createConnection();

export default connection;