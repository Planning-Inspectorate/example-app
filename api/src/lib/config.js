import dotenv from 'dotenv';

dotenv.config();

export default {
    logLevel: process.env.LOG_LEVEL,
    httpPort: process.env.API_PORT
};