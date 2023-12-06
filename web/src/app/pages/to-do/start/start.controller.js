import { startViewModel } from './utils/start.view-model.js';

const view = 'pages/to-do/start/view.njk';

export function getToDoStart(req, res) {
    const { locals } = res
    const { baseUrl } = locals
    
    res.render(view, startViewModel(baseUrl));
}

