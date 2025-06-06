import dotenv from 'dotenv';

// load configuration from .env file into process.env
dotenv.config();

// export configuration
export default {
    logLevel: process.env.LOG_LEVEL,
    httpPort: process.env.API_PORT
};