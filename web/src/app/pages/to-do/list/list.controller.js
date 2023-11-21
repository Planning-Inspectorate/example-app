import { listViewModel } from './utils/list.view-model.js'

const view = 'pages/to-do/list/view.njk'

export function getToDoList(req, res) {
    const { baseUrl } = req;

    res.render(view, listViewModel(baseUrl));
}