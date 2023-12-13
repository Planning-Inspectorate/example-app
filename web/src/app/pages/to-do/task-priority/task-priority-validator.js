import { body } from 'express-validator';

export function taskPriorityValidator() {
	return [
		body('taskPriority').exists().withMessage('Select priority for the task'),
	];
};
