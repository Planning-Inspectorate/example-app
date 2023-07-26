import { Router as createRouter } from 'express';
import { viewHomepage } from '../home/home.controller.js';

// create an express router, for handling different paths
const router = createRouter();

// setup the handler for the homepage: /
router.route('/').get(viewHomepage);

// export the router for use by the app
export default router;