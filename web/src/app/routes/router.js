import { Router as createRouter } from 'express';

import { viewHomepage } from '../pages/home/home.controller.js';
import { examplesRouter } from '../pages/examples/router.js';

// create an express router, for handling different paths
const router = createRouter();

// setup the handlers for the pages
router.route('/').get(viewHomepage);
router.use('/examples', examplesRouter);


// export the router for use by the app
export default router;