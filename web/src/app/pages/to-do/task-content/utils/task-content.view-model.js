export function taskContentViewModel(baseUrl, { todo }) {
    const { taskContent } = todo || {}

    return {
        backLinkUrl: `${baseUrl}/task-name`,
        pageHeading: 'Optional task details',
        taskContentValue: taskContent
    }
}