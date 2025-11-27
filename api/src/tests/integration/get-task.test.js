// @ts-nocheck

import { jest } from '@jest/globals';
import request from 'supertest';
import logger from '../../lib/logger.js';
import { tasks } from '../data/task-data.js'

// mock the SQL connection module to avoid actual database calls
jest.unstable_mockModule('../../database/sql/sql-connection.js', () => {
    const mockQuery = jest.fn();
    const mockEnd = jest.fn();

    return {
        __esModule: true,
        default: { query: mockQuery, end: mockEnd },
    };
});

// import the query function from the mocked SQL connection module
const { query } = (await import('../../database/sql/sql-connection.js')).default;

// import the app creation function to set up the Express API app for testing
const { createApp } = await import ('../../app.js');

let app;

// test suite for the GET /tasks/:id endpoint
describe('GET /tasks/:id', () => {
    beforeAll(() => {
        app = createApp();
    });

    it('should return the correct data', async () => {
        query.mockResolvedValueOnce(tasks[0]);

        const response = await request(app).get('/tasks/1');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(tasks[0]);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        query.mockRejectedValue(error);

        const response = await request(app).get('/tasks/1');

        expect(response.status).toEqual(500);
        expect(response.text).toEqual('Internal server error');
    });
});