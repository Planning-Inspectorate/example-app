export function taskDeadlineViewModel(baseUrl, { todo }) {
    return {
        backLinkUrl: `${baseUrl}/task-priority`,
        pageHeading: 'What is the deadline for this task?',
        taskDeadline: todo.taskDeadline || {},
    }   
}