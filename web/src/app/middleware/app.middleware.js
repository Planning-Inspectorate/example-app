export function appMiddleware(req, res, next) {
    const { baseUrl } = req;

    next();
}