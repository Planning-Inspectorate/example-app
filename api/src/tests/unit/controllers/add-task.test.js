// @ts-nocheck

import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';
import logger from '../../../lib/logger.js';
import {taskInput, task, tasks} from '../../data/task-data.js';

// mock the function in the repository module to avoid actual database calls
jest.unstable_mockModule('../../../database/repositories/todo.repository.js', () => {
    const mockAddTaskData = jest.fn();

    return {
        __esModule: true,
        addTaskData: mockAddTaskData
    };
});

// test suite for the addTask controller function
describe('addTask', () => {
    it('should add a task', async () => {
        const { addTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        addTaskData.mockResolvedValue([task]);

        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/tasks',
            body: taskInput
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.json = jest.fn();

        const { addTask } = (await import('../../../controllers/add-task.js'));
        await addTask(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith([task]);
    });

    it('should return an error', async () => {
        const error = new Error('Database error');
        jest.spyOn(logger, 'error').mockImplementation(() => {});

        const { addTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        addTaskData.mockRejectedValue(error);

        const req = httpMocks.createRequest({
            method: 'POST',
            url: '/tasks',
            body: taskInput
        });

        const res = httpMocks.createResponse();
        res.status = jest.fn().mockReturnThis();
        res.send = jest.fn();

        const { addTask } = (await import('../../../controllers/add-task.js'));
        await addTask(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
    });
});