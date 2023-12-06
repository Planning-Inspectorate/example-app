export function toDoMiddleware(req, res, next) {
    const { baseUrl } = req;
    /* 
        res.locals property is an object that contains response local variables scoped to the request and because of this, 
        it is only available to the view(s) rendered during that request/response cycle. T|he data withing res.locals in available directly from the template,
        eg baseUrl is available in the template as {{ baseUrl }}.
    */
    res.locals.baseUrl = baseUrl

    next();
}