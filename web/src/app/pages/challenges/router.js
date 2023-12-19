import express  from 'express'


import { getChallengesStart } from './start/start.controller.js';
import { getStoryPoints } from './story-points/storyPoints.controller.js';


const challengesRouter = express.Router();

challengesRouter.get('/', getChallengesStart);
challengesRouter.get('/story-points', getStoryPoints);

export { challengesRouter }