import express  from 'express'

import { getChallengesStart } from './start/start.controller.js';
import { getStoryPoints } from './story-points/story-points.controller.js';
import { getUserInput, postUserInput } from './user-input/user-input.controller.js';
import { emailValidator } from '../../validators/shared/email.validator.js';


const challengesRouter = express.Router();


challengesRouter.get('/', getChallengesStart);
challengesRouter.get('/story-points', getStoryPoints);
challengesRouter.get('/user-input', getUserInput);
challengesRouter.post('/user-input', emailValidator(), postUserInput);



export { challengesRouter }