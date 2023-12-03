import { getAllTasks } from '../_services/todo.service.js';
import { listViewModel } from './utils/list.view-model.js'

const view = 'pages/to-do/list/view.njk'

export async function getToDoList(req, res) {
    const { baseUrl, session } = req;

    const todoList = await getAllTasks();

    //TODO: maybe lift away all session manipulation to a designated session handler?
    //Clear todo session data
    delete session.todo;

    console.log('session:>>>', session)
    console.log('todoList:>>>', todoList)

    res.render(view, listViewModel(baseUrl, todoList));
}