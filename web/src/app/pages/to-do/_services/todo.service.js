// import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export async function getAllTasks() {
    const res = await fetch(`${baseUrl}/todos`);
    return res.json();
}

export async function getTaskById(taskId) {
    const res = await fetch(`${baseUrl}/todos/${taskId}`);
    return res.json();
}

export async function createTask(taskBody) {
    const res = await fetch(`${baseUrl}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskBody)
    });
    return res.json();
}

export async function deleteTask(taskId) {
    const res = await fetch(`${baseUrl}/todos/${taskId}`, {
        method: 'DELETE'
    });
    return res.json();
}