// @ts-nocheck

import { jest } from '@jest/globals';
import request from 'supertest';
import logger from '../../lib/logger.js';
import {task, taskInput } from '../data/task-data.js'

jest.unstable_mockModule('../../database/sql/sql-connection.js', () => {
    const mockQuery = jest.fn();
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

const { query } = (await import('../../database/sql/sql-connection.js')).default;

const { createApp } = await import ('../../app.js');

let app;

describe('POST /api/tasks', () => {
    beforeAll(() => {
        app = createApp();
    });

    it('should create a new task', async () => {
        query.mockResolvedValueOnce(task);

        const response = await request(app)
            .post('/api/tasks')
            .send(taskInput);

        expect(response.status).toEqual(201);
        expect(response.body).toEqual(task);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        query.mockRejectedValue(error);

        const response = await request(app)
            .post('/api/tasks')
            .send(taskInput);

        expect(response.status).toEqual(500);
        expect(response.text).toEqual('Internal server error');
    });
});