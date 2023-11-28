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
    const { errors } = body

    const { locals } = res
    const { baseUrl } = locals

    if(errors) {
        //TODO handle errors
        return res.render(view, {
            ...taskPriorityViewModel(body),
            errors
        })
    }
    session.todo = session.todo || {}
    session.todo.taskPriority = body.taskPriority

    console.log('session:>>>', session)

    return res.redirect(`${baseUrl}/task-deadline`)
}