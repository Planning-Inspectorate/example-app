// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../../lib/logger.js';
import { tasks } from '../../data/task-data.js';

// mock the function in the repository module to avoid actual database calls
jest.unstable_mockModule('../../../database/repositories/todo.repository.js', () => {
    const mockGetAllTaskData = jest.fn();

    return {
        __esModule: true,
        getAllTaskData: mockGetAllTaskData
    };
});

// test suite for the getAllTasks controller function
describe('getAllTasks', () => {
    it('should return all tasks', async () => {
        const { getAllTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        getAllTaskData.mockResolvedValue([tasks]);

        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/tasks',
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();

        const { getAllTasks } = (await import('../../../controllers/get-all-tasks.js'));
        await getAllTasks(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([tasks]);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        const { getAllTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        getAllTaskData.mockRejectedValue(error);

        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/tasks',
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.send = jest.fn();

        const { getAllTasks } = (await import('../../../controllers/get-all-tasks.js'));
        await getAllTasks(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
    });
});