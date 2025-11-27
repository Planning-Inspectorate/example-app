// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../../lib/logger.js';
import { task } from '../../data/task-data.js';

// mock the function in the repository module to avoid actual database calls
jest.unstable_mockModule('../../../database/repositories/todo.repository.js', () => {
    const mockDeleteTaskData = jest.fn();

    return {
        __esModule: true,
        deleteTaskData: mockDeleteTaskData
    };
});

// test suite for the deleteTask controller function
describe('deleteTask', () => {
    it('should delete a task', async () => {
        const { deleteTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        deleteTaskData.mockResolvedValue([task]);

        const req = httpMocks.createRequest({
            method: 'DELETE',
            url: '/tasks/3',
            params: {
                taskId: 3
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();

        const { deleteTask } = (await import('../../../controllers/delete-task.js'));
        await deleteTask(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
        expect(res.json).toHaveBeenCalledWith([task]);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        const { deleteTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        deleteTaskData.mockRejectedValue(error);

        const req = httpMocks.createRequest({
            method: 'DELETE',
            url: '/tasks/3',
            params: {
                taskId: 3
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.send = jest.fn();

        const { deleteTask } = (await import('../../../controllers/delete-task.js'));
        await deleteTask(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
    });
});