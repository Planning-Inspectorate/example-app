import { validationResult } from 'express-validator';

/**
 * 
 * @param {Object} expressValidationErrors
 * @returns {Array}
 */

function expressValidationErrorsToGovUkErrorList(expressValidationErrors) {
	const mappedErrors = [];

    //if no errors, return empty
	if (Object.keys(expressValidationErrors).length === 0) {
		return mappedErrors;
	}
    //when errors are present, return them in a format that can be used by govuk error summary component
	Object.keys(expressValidationErrors).forEach((key) => {
		mappedErrors.push({
			text: expressValidationErrors[key].msg,
			href: `#${key}`
		});
	});

	return mappedErrors;
};


export function validationErrorHandler(req, res, next) {
	const errors = validationResult(req);

	if (errors.isEmpty()) {
		return next();
	}

	const mappedErrors = errors.mapped();

	req.body.errors = mappedErrors;
	req.body.errorSummary = expressValidationErrorsToGovUkErrorList(mappedErrors);

	return next();
};
