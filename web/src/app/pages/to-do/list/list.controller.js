import { getAllTasks } from '../_services/todo.service.js';
import { listViewModel } from './utils/list.view-model.js'

const view = 'pages/to-do/list/view.njk'

export async function getToDoList(req, res) {
    const { baseUrl, session, query } = req;
    const { taskCreated } = query;

    const todoList = await getAllTasks();

    //TODO: maybe lift away all session manipulation to a designated session handler?
    //Clear todo session data
    delete session.todo;

    res.render(view, listViewModel(baseUrl, todoList, taskCreated));
}