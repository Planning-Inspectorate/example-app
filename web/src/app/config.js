import dotenv from 'dotenv';

// load configuration from .env file into process.env
dotenv.config();

// export configuration, with defaults if they are not set
export default {
    // the URL of the API service
    apiUrl: process.env.API_URL || 'http://localhost:3000',
    // the log level to use
    logLevel: process.env.LOG_LEVEL || 'info',
    // the HTTP port to listen on
    httpPort: process.env.HTTP_PORT || 8080
};