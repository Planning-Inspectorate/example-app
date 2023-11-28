import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export async function getAllTodos() {
    const { data: allTodos } = await axios.get(`${baseUrl}/todos`);
    return allTodos
}