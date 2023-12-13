import { startViewModel } from './utils/start.view-model.js';

const view = 'pages/to-do/start/view.njk';
/**
 *
 * @type {import('express').RequestHandler}
 */
export function getToDoStart(req, res) {
    const { locals } = res
    const { baseUrl } = locals
    
    res.render(view, startViewModel(baseUrl));
}

