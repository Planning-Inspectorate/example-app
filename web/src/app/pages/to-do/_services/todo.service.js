import axios from 'axios';
import config from '../../../../../../web/src/app/config.js';
import logger from '../../../../../src/util/logger.js';

const baseUrl = config.apiUrl;

export async function getAllTasks() {
    try {
        const { data: tasks } = await axios.get(`${baseUrl}/tasks`);
        return tasks[0];
    } catch (error) {
        logger.error('Error fetching all tasks:', error);
        throw error;
    }
};

export async function getTaskById(taskId) {
    if (!/^[0-9]+$/.test(taskId)) {
        throw new Error('Task ID is required to fetch the task');
    }
    try {
        const { data } = await axios.get(`${baseUrl}/tasks/${taskId}`);
        const tasks = data[0];
        return tasks[0];
    } catch (error) {
        logger.error('Error fetching task:', error);
        throw error;
    }
};

export async function createTask(taskBody) {
    try {
        const task = await axios.post(`${baseUrl}/tasks`, taskBody);
        return task;
    } catch (error) {
        logger.error('Error creating task:', error);
        throw error;
    }
};

export async function deleteTask(taskId) {
    if (!/^[0-9]+$/.test(taskId)) {
        throw new Error('Task ID is required for deletion');
    }
    try {
        const { data: task } = await axios.delete(`${baseUrl}/tasks/${taskId}`);
        return task;
    } catch (error) {
        logger.error('Error deleting task:', error);
        throw error;
    }
};