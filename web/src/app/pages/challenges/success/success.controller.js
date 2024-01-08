const view = 'pages/challenges/success/view.njk';

/**
 *
 * @type {import('express').RequestHandler}
 */

export function getSuccess(req, res) {
    res.render(view, {
        pageTitle: 'Success!',
    })
}