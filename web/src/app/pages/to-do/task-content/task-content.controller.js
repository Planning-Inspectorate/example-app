import { taskContentViewModel } from './utils/task-content.view-model.js'

const view = 'pages/to-do/task-content/view.njk'

export function getTaskContent(req, res) {
    const { session, query } = req
    const { mode } = query
    const { locals } = res
    const { baseUrl } = locals
    
    res.render(view, taskContentViewModel(baseUrl, session, mode))
}

export function postTaskContent(req, res) {
    const { body, session, query } = req
    const { mode } = query
    const { errors } = body

    const { locals } = res
    const { baseUrl } = locals

    if(errors) {
        //TODO handle errors
        return res.render(view, {
            ...taskContentViewModel(baseUrl, session, mode),
            errors
        })
    }
    session.todo = session.todo || {}
    session.todo.taskContent = body.taskContent
    
    if(mode === 'edit') {
        return res.redirect(`${baseUrl}/check-answers`)
    }

    return res.redirect(`${baseUrl}/task-priority`)
}