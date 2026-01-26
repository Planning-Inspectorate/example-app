// mock task data to be used in tests
const tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description of Task 1',
        completeBy: '2023-01-03 00:00:00',
        priority: 1
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description of Task 2',
        completeBy: '2023-01-03 00:00:00',
        priority: 1
    },
]

const taskInput = {
    id: 3,
    title: 'Task 3',
    description: 'Description of Task 3',
    taskDeadline: {
        'task-deadline-day': '01',
        'task-deadline-month': '06',
        'task-deadline-year': '2025'
    },
    priority: 3
};

const task = {
    id: 3,
    title: 'Task 3',
    description: 'Description of Task 3',
    completeBy: '2025-06-01 00:00:00',
    priority: 3
};

export { tasks, taskInput, task };
