// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../lib/logger.js';

const task = {
    title: 'Task 1',
    description: 'Description of Task 1',
    completeBy: '2025-06-01 00:00:00',
    priority: 1
};

jest.unstable_mockModule('../../database/sql/sql-connection.js', () => {
    const mockQuery = jest.fn().mockResolvedValue([task]);
    const mockEnd = jest.fn(); 
  
    return {
      __esModule: true,
      default: { query: mockQuery, end: mockEnd },
    };
});

jest.unstable_mockModule('../../lib/get-task-deadline-date-input.js', () => {
    const mockGetTaskDeadlineDateInput = jest.fn().mockReturnValue('2025-06-01 00:00:00');

    return {
        __esModule: true,   
        default: mockGetTaskDeadlineDateInput
    };
});

const { addTaskData } = (await import('../../controllers/add-task-data.js'));

describe('addTaskData', () => {
    it('should add a task', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/api/tasks',
            body: { 
                    title: 'Task 1',
                    description: 'Description of Task 1',
                    taskDeadline: {
                        'task-deadline-day': '01',
                        'task-deadline-month': '06',
                        'task-deadline-year': '2025' 
                    },
                    priority: 1
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();

        await addTaskData(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith([task]);
    });

    it('should return an error', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/api/tasks',
            body: { 
                title: 'Task 1',
                description: 'Description of Task 1',
                taskDeadline: {
                    'task-deadline-day': '01',
                    'task-deadline-month': '06',
                    'task-deadline-year': '2025' 
                },
                priority: 1
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.send = jest.fn();

        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        const { query } = (await import('../../database/sql/sql-connection.js')).default;
        query.mockRejectedValue(error);

        await addTaskData(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
    });
});