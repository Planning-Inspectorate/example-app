import { body } from 'express-validator';

export function taskNameValidator() {
	return [
		body('taskName').notEmpty().withMessage('Enter the task name'),
		body('taskName')
			.isLength({ min: 3, max: 255 })
			.withMessage('Task name must be between 3 and 255 characters')
	];
};
