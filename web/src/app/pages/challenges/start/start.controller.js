const view = 'pages/challenges/start/view.njk';

/**
 *
 * @type {import('express').RequestHandler}
 */
export function getChallengesStart(req, res)
{
    const baseUrl = res.req.baseUrl;
    return res.render(view, {
        backLinkUrl: '/',
        pageTitle: 'Challenges',
        pageHeading: 'Challenges',
        nextPageURL: `${baseUrl}/story-points`
    })
}
