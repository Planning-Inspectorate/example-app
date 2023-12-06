import { taskPriorityViewModel } from './utils/task-priority.vew-model.js'

const view = 'pages/to-do/task-priority/view.njk'

export function getTaskPriority(req, res) {
    const { session } = req
    const { locals } = res
    const { baseUrl } = locals

    res.render(view, taskPriorityViewModel(baseUrl, session))
}

export function postTaskPriority(req, res) {
    const { body, session } = req
    //errors and errorSummary are added by the validation middleware
    const { errors, errorSummary } = body

    const { locals } = res
    const { baseUrl } = locals

    if(errors) {
        return res.render(view, {
            ...taskPriorityViewModel(baseUrl, session),
            errors,
            errorSummary
        })
    }
    session.todo = session.todo || {}
    session.todo.taskPriority = Number(body.taskPriority)

    return res.redirect(`${baseUrl}/task-deadline`)
}