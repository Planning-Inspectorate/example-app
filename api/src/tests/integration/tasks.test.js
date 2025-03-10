// @ts-nocheck

import { jest } from '@jest/globals';
import request from 'supertest';
import { app } from '../../app.js';

const tasks = [
    {
        id: 1,
        userId: 123,
        createdAt: '2023-01-01 00:00:00',
        updatedAt: '2023-01-02 00:00:00',
        completeBy: '2023-01-03 00:00:00',
        title: 'Task 1',
        description: 'Description of Task 1',
        priority: 1
    },
    {
        id: 2,
        userId: 123,
        createdAt: '2023-01-01 00:00:00',
        updatedAt: '2023-01-02 00:00:00',
        completeBy: '2023-01-03 00:00:00',
        title: 'Task 2',
        description: 'Description of Task 2',
        priority: 1
    },
]

jest.unstable_mockModule('../../controllers/get-all-task-data.js', () => {
const mockGetAllTaskData = jest.fn();
  
    return {
      __esModule: true,
      getAllTaskData: mockGetAllTaskData
    };
});

const { getAllTaskData } = await import('../../controllers/get-all-task-data.js');

describe('api/tasks', () => {
    describe ('GET /api/tasks', () => {
        it('should return the correct data', async () => {
            getAllTaskData.mockResolvedValueOnce([tasks]);
            
            const response = await request(app).get('/api/tasks');

            expect(response.status).toEqual(200);
            expect(response.body).toEqual([tasks]);
        });

        it('should return an error', async () => {
            const error = new Error('Database error');
            getAllTaskData.mockRejectedValueOnce(error);
    
            const response = await request(app).get('/api/tasks');
    
            expect(response.status).toEqual(500);
            expect(response.body).toEqual({ error: 'Internal server error' });
        });
    });
});