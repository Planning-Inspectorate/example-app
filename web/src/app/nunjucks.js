import { createRequire } from 'node:module';
import path from 'node:path';
import nunjucks from 'nunjucks';
import config from './config.js';

// get the require function, see https://nodejs.org/api/module.html#modulecreaterequirefilename
const require = createRequire(import.meta.url);
// get the path to the govuk-frontend folder, in node_modules, using the node require resolution
const govukFrontendRoot = path.resolve(require.resolve('govuk-frontend'), '../..');

// configure nunjucks
const nunjucksEnvironment = nunjucks.configure(
    // ensure nunjucks templates can use govuk-frontend components, and templates we've defined in `web/src`
	[govukFrontendRoot, config.srcDir],
	{
		// output with dangerous characters are escaped automatically
		autoescape: true,
		// automatically remove trailing newlines from a block/tag
		trimBlocks: true,
		// automatically remove leading whitespace from a block/tag
		lstripBlocks: true
	}
);

export default nunjucksEnvironment;