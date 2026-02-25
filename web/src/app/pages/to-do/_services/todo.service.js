import config from '../../../../../../web/src/app/config.js';
import logger from '../../../../../src/util/logger.js';

const baseUrl = config.apiUrl;

export async function getAllTasks() {
    try {
        const res = await fetch(`${baseUrl}/tasks`);
        const tasks = await res.json();
        return tasks[0];
    } catch (error) {
        logger.error(`Error fetching all tasks: ${error}`);
        throw error;
    }
}

export async function getTaskById(taskId) {
    if (!/^[0-9]+$/.test(taskId)) {
        throw new Error('Task ID is required to fetch the task');
    }

    try {
        const res = await fetch(`${baseUrl}/tasks/${taskId}`);
        const task = await res.json();
        return task[0][0];
    } catch (error) {
        logger.error(`Error fetching task: ${error}`);
        throw error;
    }
}

export async function createTask(taskBody) {
    try {
        const res = await fetch(`${baseUrl}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskBody)
        });
        return res.json();
    } catch (error) {
        logger.error(`Error creating task: ${error}`);
        throw error;
    }
}

export async function deleteTask(taskId) {
    if (!/^[0-9]+$/.test(taskId)) {
        throw new Error('Task ID is required for deletion');
    }

    try {
        const res = await fetch(`${baseUrl}/tasks/${taskId}`, {
            method: 'DELETE'
        });
        return res.text();
    } catch (error) {
        logger.error(`Error deleting task: ${error}`);
        throw error;
    }
}