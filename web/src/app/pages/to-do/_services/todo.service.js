import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export async function getAllTasks() {
    const { data: allTasks } = await axios.get(`${baseUrl}/todos`);
    return allTasks
}

export async function getTaskById(taskId) {
    const { data: task } = await axios.get(`${baseUrl}/todos/${taskId}`);
    return task
}

export async function createTask(taskBody) {
    const { data: task } = await axios.post(`${baseUrl}/todos`, taskBody);
    return task
}

export async function deleteTask(taskId) {
    const { data: task } = await axios.delete(`${baseUrl}/todos/${taskId}`);
    return task
}