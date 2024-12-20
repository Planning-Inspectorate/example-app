import pino from 'pino';
import config from './config.js';

const logger = pino({
    transport: {
      target: 'pino-pretty',
      level: config.logLevel,
      options: {
        colorize: true
      }
    }
  });
  
  export default logger;