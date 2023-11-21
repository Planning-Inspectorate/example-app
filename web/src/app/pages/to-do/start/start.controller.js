import { startViewModel } from "./utils/start.view-model.js";

const view = 'pages/to-do/start/view.njk';

export function getToDoStart(req, res) {
    res.render(view, startViewModel());
}

