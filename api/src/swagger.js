import swaggerAutogen from 'swagger-autogen';
import logger from './lib/logger.js';

const spec = {
    info: {
        version: '1.0.0',
        title: 'Example App API',
        description: 'Example App API documentation from Swagger'
    },
    host: '',
    basePath:'',
    schemes: [],
    consumes: [],
    produces: [],
    tags: [
        {
            name: '',
            description: ''
        }
    ],
    securityDefinitions: {},
    definitions: {}
};

const outputFile = './swagger-output.json';
const routes = ['./routes/router.js'];

swaggerAutogen()(outputFile, routes, spec).then(() => {
    logger.info('Swagger spec generated');
}).catch((error) => {
    logger.error('Error generating Swagger spec:', error);
});