import { getPageDataViewModel } from './utils/get-page-data-view-model.js';


/**
 * Render the home page
 *
 * @type {import('express').RequestHandler}
 */
export function viewHomepage(req, res) {
    res.render('pages/home/home.view.njk', getPageDataViewModel());
}