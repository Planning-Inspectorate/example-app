import { getPageDataViewModel } from "./utils/get-page-data-view-model.js";

const view = 'pages/examples/start/view.njk';

export const getExamplesStart = (req, res) => {
    res.render(view, getPageDataViewModel());
}

