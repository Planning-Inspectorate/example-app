import { body } from 'express-validator';

export function taskCategoryValidator() {
	return [
		body('taskCategory').exists().withMessage('Select a category for the task'),
	];
};
