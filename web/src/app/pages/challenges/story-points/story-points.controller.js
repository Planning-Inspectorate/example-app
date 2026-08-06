

const view = 'pages/challenges/story-points/view.njk';
/**
 *
 * @type {import('express').RequestHandler}
 */
export function getStoryPoints(req, res) {
    return res.render(view, {
        //backLinkUrl: '/',
        pageTitle: 'Agile story points',
        // pageHeading: 'Agile story points'
    })
}