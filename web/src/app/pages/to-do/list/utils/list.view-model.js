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

export function listViewModel(baseUrl, todoList) {
    return {
        backLinkUrl: baseUrl,
        pageHeading: 'To do list',
        pageTitle: 'To do list',
        todoList: todoListMap(baseUrl, todoList)
    }
} 