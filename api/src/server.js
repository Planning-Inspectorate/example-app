import { createApp } from './app.js';
import config from '../src/lib/config.js';
import logger from '../src/lib/logger.js';

const app = createApp();

app.set('http-port', config.httpPort);

app.listen(app.get('http-port'), () => {
  logger.info(
    `Server is running at http://localhost:${app.get('http-port')} in ${app.get('env')} mode`
  );
});