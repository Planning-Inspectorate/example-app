import logger from '../util/logger.js';

/**
 * A catch-all error handler to use as express middleware
 *
 * @type {import('express').ErrorRequestHandler}
 */
export function defaultErrorHandler(error, req, res, next) {
    logger.error(error.message || 'unknown error', error);
}