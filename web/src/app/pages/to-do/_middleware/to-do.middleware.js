export function toDoMiddleware(req, res, next) {
    const { baseUrl } = req;
    res.locals.baseUrl = baseUrl

    next();
}