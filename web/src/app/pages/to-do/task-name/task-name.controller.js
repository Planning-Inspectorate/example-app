import { taskNameViewModel } from './utils/task-name.view-model.js'

const view = 'pages/to-do/task-name/view.njk'

export function getTaskName(req, res) {
    const { session, query } = req
    const { mode } = query
    const { locals } = res
    const { baseUrl } = locals
    res.render(view, {
        ...taskNameViewModel(baseUrl, session, mode),
    })
}

export function postTaskName(req, res) {
    const { body, session, query } = req
    //errors and errorSummary are added by the express-validator
    const { errors, errorSummary } = body

    const { locals } = res
    const { baseUrl } = locals
    
    session.todo = session.todo || {}
    session.todo.taskName = body.taskName

    if(errors) {
        return res.render(view, {
            ...taskNameViewModel(baseUrl, session, body),
            errors,
            errorSummary
        })
    }

    if(query.mode === 'edit') {
        return res.redirect(`${baseUrl}/check-answers`)
    }
    return res.redirect(`${baseUrl}/task-content`)

}