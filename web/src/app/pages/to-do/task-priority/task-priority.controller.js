import { taskPriorityViewModel } from './utils/task-priority.vew-model.js'

const view = 'pages/to-do/task-priority/view.njk'

export function getTaskPriority(req, res) {
    const { session, query } = req
    const { mode } = query
    const { locals } = res
    const { baseUrl } = locals

    res.render(view, taskPriorityViewModel(baseUrl, session, mode))
}

export function postTaskPriority(req, res) {
    const { body, session, query } = req
    const { mode } = query
    //errors and errorSummary are added by the validation middleware
    const { errors, errorSummary } = body

    const { locals } = res
    const { baseUrl } = locals

    if(errors) {
        return res.render(view, {
            ...taskPriorityViewModel(baseUrl, session, mode),
            errors,
            errorSummary
        })
    }
    session.todo = session.todo || {}
    session.todo.taskPriority = Number(body.taskPriority)

    if(mode === 'edit') {
        return res.redirect(`${baseUrl}/check-answers`)
    }


    return res.redirect(`${baseUrl}/task-deadline`)
}