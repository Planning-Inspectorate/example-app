/**
 * A catch-all error handler to use as express middleware
 *
 * @type {import('express').ErrorRequestHandler}
 */
export function defaultErrorHandler(error, req, res, next) {
    console.log(error.message || 'unknown error', error);
}