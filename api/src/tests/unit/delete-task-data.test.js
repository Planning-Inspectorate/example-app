// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../lib/logger.js';

const task = {
    id: 1,
    userId: 123,
    createdAt: '2023-01-01 00:00:00',
    updatedAt: '2023-01-02 00:00:00',
    completeBy: '2023-01-03 00:00:00',
    title: 'Task 1',
    description: 'Description of Task 1',
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

const { deleteTaskData } = (await import('../../controllers/delete-task-data.js'));

describe('deleteTaskData', () => {  
    it('should delete a task', async () => {
        const req = httpMocks.createRequest({
            method: 'DELETE',
            url: '/api/tasks/1',
            params: {
                taskId: 1
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();

        await deleteTaskData(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([task]);
    });

    it('should return an error', async () => {
        const req = httpMocks.createRequest({
            method: 'DELETE',
            url: '/api/tasks/1',
            params: {
                taskId: 1
            }
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.send = jest.fn();

        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        const { query } = (await import('../../database/sql/sql-connection.js')).default;
        query.mockRejectedValue(error);

        await deleteTaskData(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
    });
});