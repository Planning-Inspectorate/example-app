/**
 * Render the home page
 *
 * @type {import('express').RequestHandler}
 */
export function viewHomepage(req, res) {
    res.render('home/home.view.njk');
}