import { taskDeadlineViewModel } from './utils/task-deadline.view-model.js'
import { getTaskDeadlineDateInput } from './utils/get-task-deadline-date-input.js'
const view = 'pages/to-do/task-deadline/view.njk'

export function getTaskDeadline(req, res) {
    const { locals } = res
    const { baseUrl } = locals
    res.render(view, taskDeadlineViewModel(baseUrl))
}

export function postTaskDeadline(req, res) {
    const { body, session } = req
    const { errors } = body

    const { locals } = res
    const { baseUrl } = locals
    
    if(errors) {
        //TODO handle errors
        return res.render(view, {
            ...taskDeadlineViewModel(body),
            errors
        })
    }

    const taskDeadline = getTaskDeadlineDateInput(body)
    session.todo = session.todo || {}
    session.todo.taskDeadline = taskDeadline

    return res.redirect(`${baseUrl}/check-answers`)
}