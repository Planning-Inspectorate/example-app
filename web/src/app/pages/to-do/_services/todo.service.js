import axios from 'axios';
import config from '../../../../../../web/src/app/config.js';

const baseUrl = config.apiUrl;

export async function getAllTasks() {
    try {
        const { data } = await axios.get(`${baseUrl}/api/tasks`);
        const allTasks = data[0];
        return allTasks;
    } catch (error) {
        console.error('Error fetching all tasks:', error);
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
        console.error(`Error fetching task with ID ${taskId}:`, error);
        throw error;
    }
};

export async function createTask(taskBody) {
    try {
        const { data: task } = await axios.post(`${baseUrl}/api/tasks`, taskBody);
        return task;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

export async function deleteTask(taskId) {
    try {
        const { data: task } = await axios.delete(`${baseUrl}/api/tasks/${taskId}`);
        return task;
    } catch (error) {
        console.error(`Error deleting task with ID ${taskId}:`, error);
        throw error;
    }
};