import { deleteTask, getTaskById } from '../_services/todo.service.js'
import { taskViewModel } from './utils/task.view-model.js'
import  logger from '../../../../util/logger.js'


const view = 'pages/to-do/task/view.njk'

export async function getTask(req, res) {
    const { params } = req
    const { taskId } = params
    const { locals } = res
    const { baseUrl } = locals

    const taskItem = await getTaskById(taskId)

    console.log(taskItem)
    
    res.render(view, taskViewModel(baseUrl, taskItem))
}

export async function postTask(req, res) {
    const { params } = req
    const { taskId } = params
    const { locals } = res
    const { baseUrl } = locals

    
    try {
        await deleteTask(taskId)
    } catch (error) {
        //in case of an error, log it and render the error page
        logger.error(error)
        return res.render('pages/error/view.njk')
    }


    res.redirect(`${baseUrl}/list`)
    
}