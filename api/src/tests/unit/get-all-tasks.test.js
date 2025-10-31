// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../lib/logger.js';
import { tasks } from '../data/task-data.js';

// mock the SQL connection module to avoid actual database calls
jest.unstable_mockModule('../../database/sql/sql-connection.js', () => {
    const mockQuery = jest.fn().mockResolvedValue([tasks]);
    const mockEnd = jest.fn(); 
  
    return {
      __esModule: true,
      default: { query: mockQuery, end: mockEnd },
    };
});

const { getAllTasks } = (await import('../../controllers/get-all-tasks.js'));

// test suite for the getAllTasks controller function
describe('getAllTasks', () => {
    it('should return all tasks', async () => {
        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/tasks',
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();

        await getAllTasks(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([tasks]);
    });

    it('should return an error', async () => {
        const req = httpMocks.createRequest({
            method: 'GET',
            url: '/tasks',
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.send = jest.fn();

        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        const { query } = (await import('../../database/sql/sql-connection.js')).default;
        query.mockRejectedValue(error);

        await getAllTasks(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
    });
});