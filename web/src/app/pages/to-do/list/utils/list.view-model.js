function todoListMap(baseUrl, todoList)  {
    return todoList.map(todo => {
        return {
            title: todo.title,
            priority: todo.priority,
            completeBy: todo.completeBy || '-',
            todoUrl: `${baseUrl}/task/${todo.id}`
        }
    });
}

export function listViewModel(baseUrl, todoList, taskCreated) {
    return {
        backLinkUrl: baseUrl,
        pageHeading: 'To do list',
        pageTitle: 'To do list',
        taskCreated: taskCreated === 'true',
        todoList: todoListMap(baseUrl, todoList)
    }
} 