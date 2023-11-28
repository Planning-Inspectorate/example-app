import { taskNameViewModel } from './utils/task-name.view-model.js'

const view = 'pages/to-do/task-name/view.njk'

export function getTaskName(req, res) {
    const { session } = req
    const { locals } = res
    const { baseUrl } = locals
    res.render(view, {
        ...taskNameViewModel(baseUrl, session),
    })
}

export function postTaskName(req, res) {
    const { body, session } = req
    const { errors } = body

    const { locals } = res
    const { baseUrl } = locals


    if(errors) {
        //TODO handle errors
        return res.render(view, {
            ...taskNameViewModel(body),
            errors
        })
    }

    session.todo = session.todo || {}
    session.todo.taskName = body.taskName

    console.log('session:>>>', session)
    
    return res.redirect(`${baseUrl}/task-content`)
}