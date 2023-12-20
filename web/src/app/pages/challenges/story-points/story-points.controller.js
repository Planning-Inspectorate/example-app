import { getChallengeById } from '../_utils/get-challenge-by-id.js';

//[Challenges: 1a, 1b, 1c]

const view = 'pages/challenges/story-points/view.njk';
/**
 *
 * @type {import('express').RequestHandler}
 */
export function getStoryPoints(req, res) {
    res.render(view);
}

