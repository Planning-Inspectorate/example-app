import mysql from 'mysql2/promise';
import logger from '../web/src/util/logger.js';
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })


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
        logger.info('Error connecting to the database:', error);
        throw error;
    }
};

const connection = await createConnection();

export default connection;