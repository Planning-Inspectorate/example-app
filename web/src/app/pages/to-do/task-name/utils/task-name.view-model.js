export function taskNameViewModel(baseUrl, { todo }, body) {
    const { taskName } = todo || {}
    
    return {
        backLinkUrl: `${baseUrl}/list`,
        pageTitle: 'What is the new task name?',
        taskNameValue: taskName
    }
}