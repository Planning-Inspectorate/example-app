import { body } from 'express-validator';

export function taskDeadlineValidator() {
    return [
        body('task-deadline-day').notEmpty().withMessage('Enter the task deadline day'),
        body('task-deadline-month').notEmpty().withMessage('Enter the task deadline month'),
        body('task-deadline-year').notEmpty().withMessage('Enter the task deadline year')
    ];
};