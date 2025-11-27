// @ts-nocheck

import { jest } from '@jest/globals';
import {task, tasks} from "../../data/task-data.js";

const mockQuery = jest.fn();
const mockEnd = jest.fn();

// mock the SQL connection module to avoid actual database calls
jest.unstable_mockModule('../../../database/sql/sql-connection.js', () => {
    return {
        __esModule: true,
        default: { query: mockQuery, end: mockEnd },
    };
});

// test suite for the repository function that calls the database to add task data
describe('addTaskData', () => {
    beforeAll( () => {
        mockQuery.mockClear();
        mockQuery.mockResolvedValue([task]);
    });

    it('should call the database with the correct parameters', async () => {
        const { addTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        await addTaskData('mock-date', 'mock-title', 'mock-description', 'mock-priority');

        expect(mockQuery).toBeCalledWith(
            'INSERT INTO to_do (completeBy, title, description, priority) VALUES (?, ?, ?, ?)',
            ['mock-date', 'mock-title', 'mock-description', 'mock-priority']
        )
    });

    it('should return the correct data', async() => {
        const { addTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        const result = await addTaskData('mock-date', 'mock-title', 'mock-description', 'mock-priority');

        expect(result).toEqual([task]);
    });
});

// test suite for the repository function that calls the database to delete task data
describe('deleteTaskData', () => {
    beforeAll( () => {
        mockQuery.mockClear();
        mockQuery.mockResolvedValue([task]);
    });

    it('should call the database with the correct parameters', async () => {
        const { deleteTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        await deleteTaskData('mock-task-id')

        expect(mockQuery).toBeCalledWith(
            'DELETE FROM to_do WHERE id = ?',
            'mock-task-id'
        )
    });

    it('should return the correct data', async() => {
        const { deleteTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        const result = await deleteTaskData('mock-task-id')

        expect(result).toEqual([task]);
    });
});

// test suite for the repository function that calls the database to get all task data
describe('getAllTaskData', () => {
    beforeAll(() => {
        mockQuery.mockClear();
        mockQuery.mockResolvedValue([tasks]);
    });

    it('should call the database with the correct parameters', async () => {
        const { getAllTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        await getAllTaskData();

        expect(mockQuery).toBeCalledWith(
            'SELECT * FROM to_do'
        )
    });

    it('should return the correct data', async() => {
        const { getAllTaskData } = (await import('../../../database/repositories/todo.repository.js'));
        const result = await getAllTaskData();

        expect(result).toEqual([tasks]);
    });
});

// test suite for the repository function that calls the database to get data for a specific task
describe('getTaskData', () => {
    beforeAll( () => {
        mockQuery.mockClear();
        mockQuery.mockResolvedValue([task])
    });

    it('should call the database with the correct parameters', async () => {
        const { getTaskData } = (await import('../../../database/repositories/todo.repository.js'))
        await getTaskData('mock-task-id')

        expect(mockQuery).toBeCalledWith(
            'SELECT * FROM to_do WHERE id = ?',
            'mock-task-id'
        )
    });

    it('should return the correct data', async() => {
        const { getTaskData } = (await import('../../../database/repositories/todo.repository.js'))
        const result = await getTaskData('mock-task-id');

        expect(result).toEqual([task]);
    });
});