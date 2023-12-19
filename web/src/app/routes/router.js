import { Router as createRouter } from 'express';

import { viewHomepage } from '../pages/home/home.controller.js';
import { toDoRouter } from '../pages/to-do/router.js';
import { challengesRouter } from '../pages/challenges/router.js';

// create an express router, for handling different paths
const router = createRouter();

// setup the handlers for the pages
router.route('/').get(viewHomepage);

// nested router containing to-do routes
router.use('/to-do', toDoRouter);

// nested router containing challenges routes
router.use('/challenges', challengesRouter);


// export the router for use by the app
export default router;