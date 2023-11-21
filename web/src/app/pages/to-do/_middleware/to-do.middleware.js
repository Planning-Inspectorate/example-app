export function toDoMiddleware(req, res, next) {
    const { baseUrl } = req;
    res.locals.baseUrl = baseUrl
    //TODO: An example call to a resource to get data that will be used in the whole journey, to save us from calling it in every controller

    next();
}