import { taskDeadlineViewModel } from './utils/task-deadline.view-model.js'
import { getTaskDeadlineDateInput } from './utils/get-task-deadline-date-input.js'
const view = 'pages/to-do/task-deadline/view.njk'

export function getTaskDeadline(req, res) {
    const { body, session } = req
    const { locals } = res
    const { baseUrl } = locals

    res.render(view, taskDeadlineViewModel(baseUrl, session))
}

export function postTaskDeadline(req, res) {
    const { body, session } = req

    const { locals } = res
    const { baseUrl } = locals

    const taskDeadlineFriendly = getTaskDeadlineDateInput(body)
    
    session.todo = session.todo || {}
    session.todo.taskDeadlineFriendly = taskDeadlineFriendly
    session.todo.taskDeadline = body

    return res.redirect(`${baseUrl}/check-answers`)
}