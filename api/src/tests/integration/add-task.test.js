// @ts-nocheck

import { jest } from '@jest/globals';
import request from 'supertest';
import logger from '../../lib/logger.js';
import {task, taskInput } from '../data/task-data.js'

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

// test suite for the POST /tasks endpoint
describe('POST /tasks', () => {
    beforeAll(() => {
        app = createApp();
    });

    it('should create a new task', async () => {
        query.mockResolvedValueOnce(task);

        const response = await request(app)
            .post('/tasks')
            .send(taskInput);

        expect(response.status).toEqual(201);
        expect(response.body).toEqual(task);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        query.mockRejectedValue(error);

        const response = await request(app)
            .post('/tasks')
            .send(taskInput);

        expect(response.status).toEqual(500);
        expect(response.text).toEqual('Internal server error');
    });
});