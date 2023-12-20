const view = 'pages/challenges/start/view.njk';

/**
 *
 * @type {import('express').RequestHandler}
 */
export function getChallengesStart(req, res) {
    return res.render(view, {
        backLinkUrl: '/',
        pageTitle: 'Challenges',
        pageHeading: 'Challenges'
    })
}
