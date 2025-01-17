import getFormattedDate from "../../_utils/get-formatted-date.js";

function todoListMap(baseUrl, todoList)  {
    return todoList.map(todo => {
        const taskDeadline = getFormattedDate(todo.completeBy);

        return {
            title: todo.title,
            priority: todo.priority,
            completeBy: taskDeadline,
            todoUrl: `${baseUrl}/task/${todo.id}`
        }
    });
};

export function listViewModel(baseUrl, todoList, taskCreated) {
    return {
        backLinkUrl: baseUrl,
        pageHeading: 'To do list',
        pageTitle: 'To do list',
        taskCreated: taskCreated === 'true',
        todoList: todoListMap(baseUrl, todoList)
    };
};