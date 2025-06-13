import { createApp } from './app.js';
import config from '../src/lib/config.js';
import logger from '../src/lib/logger.js';

// call the createApp function to create an Express app instance for the API
const app = createApp();

// set the HTTP port to use from the loaded configuration
app.set('http-port', config.httpPort);

// start the app, listening for incoming requests on the given port
app.listen(app.get('http-port'), () => {
  logger.info(
    `Server is running at http://localhost:${app.get('http-port')} in ${app.get('env')} mode`
  );
});