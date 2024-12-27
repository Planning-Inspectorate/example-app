import axios from 'axios';
import config from '../../../../../../web/src/app/config.js';
import logger from '../../../../../src/util/logger.js';

const baseUrl = config.apiUrl;

export async function getAllTasks() {
    try {
        const { data } = await axios.get(`${baseUrl}/api/tasks`);
        const allTasks = data[0];
        return allTasks;
    } catch (error) {
        logger.error('Error fetching all tasks:', error);
        throw error;
    }
};

export async function getTaskById(taskId) {
    try {
        const { data } = await axios.get(`${baseUrl}/api/tasks/${taskId}`);
        const taskArray = data[0];
        const task = taskArray[0];
        return task;
    } catch (error) {
        logger.error('Error fetching task:', error);
        throw error;
    }
};

export async function createTask(taskBody) {
    try {
        const { data: task } = await axios.post(`${baseUrl}/api/tasks`, taskBody);
        return task;
    } catch (error) {
        logger.error('Error creating task:', error);
        throw error;
    }
};

export async function deleteTask(taskId) {
    try {
        const { data: task } = await axios.delete(`${baseUrl}/api/tasks/${taskId}`);
        return task;
    } catch (error) {
        logger.error('Error deleting task:', error);
        throw error;
    }
};