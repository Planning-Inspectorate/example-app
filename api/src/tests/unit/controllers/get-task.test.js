// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../../lib/logger.js';
import { task } from '../../data/task-data.js';

// mock the function in the repository module to avoid actual database calls
jest.unstable_mockModule('../../../database/repositories/todo.repository.js', () => {
    const mockGetTaskData = jest.fn();

    return {
        __esModule: true,
        getTaskData: mockGetTaskData
    };
});

// test suite for the getTask controller function
describe('getTask', () => {
    it('should return a task', async () => {
        const { getTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        getTaskData.mockResolvedValue([task]);

        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/tasks/3',
            params: {
                taskId: 3
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();

        const { getTask } = (await import('../../../controllers/get-task.js'));
        await getTask(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([task]);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        const { getTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        getTaskData.mockRejectedValue(error);

        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/tasks/3',
            params: {
                taskId: 3
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.send = jest.fn();

        const { getTask } = (await import('../../../controllers/get-task.js'));
        await getTask(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
    });
});





