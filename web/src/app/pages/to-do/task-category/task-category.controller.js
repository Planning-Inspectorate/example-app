import { taskCategoryViewModel } from './utils/task-category.view-model.js'

const view = 'pages/to-do/task-category/view.njk'

export function getTaskCategory(req, res) {
    const { session, query } = req
    const { mode } = query
    const { locals } = res
    const { baseUrl } = locals
    res.render(view, {
        ...taskCategoryViewModel(baseUrl, session, mode),
    })
}

export function postTaskCategory(req, res) {
    const { body, session, query } = req
    //errors and errorSummary are added by the express-validator
    const { errors, errorSummary } = body

    const { locals } = res
    const { baseUrl } = locals
    
    session.todo = session.todo || {}
    session.todo.taskCategory = body.taskCategory

    if(errors) {
        return res.render(view, {
            ...taskCategoryViewModel(baseUrl, session, body),
            errors,
            errorSummary
        })
    }

    if(query.mode === 'edit') {
        return res.redirect(`${baseUrl}/check-answers`)
    }
    return res.redirect(`${baseUrl}/task-priority`)

}