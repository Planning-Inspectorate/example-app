import { createTask } from '../_services/todo.service.js'
import { checkAnswersViewModel } from './utils/check-answers.view-model.js'
import { getTaskPayload } from './utils/get-task-payload.js'
import  logger from '../../../../util/logger.js'


const view = 'pages/to-do/check-answers/view.njk'

export function getCheckAnswers(req, res) {
    const { session } = req
    const { locals } = res
    const { baseUrl } = locals

    res.render(view, checkAnswersViewModel(baseUrl, session))
}

export async function postCheckAnswers(req, res, next) {
    const { session } = req
    const { todo } = session
    const { locals } = res
    const { baseUrl } = locals

    try {
        const payload = getTaskPayload(todo)

        await createTask(payload)
        return res.redirect(`${baseUrl}/list?taskCreated=true`)

    } catch (error) {
        logger.error(error)
        next(error)
    }
}