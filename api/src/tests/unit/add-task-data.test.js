// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../lib/logger.js';
import { taskInput, task } from '../data/task-data.js';

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
            body: taskInput
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
            body: taskInput
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