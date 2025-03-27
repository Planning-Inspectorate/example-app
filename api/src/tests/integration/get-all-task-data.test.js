// @ts-nocheck

import { jest } from '@jest/globals';
import request from 'supertest';
import logger from '../../lib/logger.js';
import { tasks } from '../data/task-data.js'

jest.unstable_mockModule('../../database/sql/sql-connection.js', () => {
    const mockQuery = jest.fn();
    const mockEnd = jest.fn();

    return {
        __esModule: true,
        default: { query: mockQuery, end: mockEnd },
    };
});

const { query } = (await import('../../database/sql/sql-connection.js')).default;

const { createApp } = await import ('../../app.js');

let app;

describe('GET /api/tasks', () => {
    beforeAll(() => {
        app = createApp();
    });

    it('should return the correct data', async () => {
        query.mockResolvedValueOnce(tasks);

        const response = await request(app).get('/api/tasks');

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(tasks);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        query.mockRejectedValue(error);

        const response = await request(app).get('/api/tasks');

        expect(response.status).toEqual(500);
        expect(response.text).toEqual('Internal server error');
    });
});