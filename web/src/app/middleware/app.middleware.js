export function appMiddleware(req, res, next) {
    const { baseUrl } = req;

    res.locals.baseUrl = baseUrl

    next();
}