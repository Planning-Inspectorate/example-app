import { taskContentViewModel } from './utils/task-content.view-model.js'

const view = 'pages/to-do/task-content/view.njk'

export function getTaskContent(req, res) {
    const { session } = req
    const { locals } = res
    const { baseUrl } = locals
    
    res.render(view, taskContentViewModel(baseUrl, session))
}

export function postTaskContent(req, res) {
    const { body, session } = req
    const { errors } = body

    const { locals } = res
    const { baseUrl } = locals

    if(errors) {
        //TODO handle errors
        return res.render(view, {
            ...taskContentViewModel(body),
            errors
        })
    }
    session.todo = session.todo || {}
    session.todo.taskContent = body.taskContent
    console.log('session:>>>', session)

    return res.redirect(`${baseUrl}/task-priority`)
}