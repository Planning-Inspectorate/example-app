function mapPriorityLevelToText(priority) {
    switch (priority) {
        case 1:
            return 'Low'
        case 2:
            return 'Medium'
        case 3:
            return 'High'
    }
}

const mapSessionDataToSummaryRows = (baseUrl, { todo }) => {
    const { taskName, taskContent, taskDeadlineFriendly, taskPriority } = todo || {}
    return [
        {
            key: {
                text: 'Task name'
            },
            value: {
                text: taskName
            },
            actions: {
                items: [
                    {
                        href: `${baseUrl}/task-name?mode=edit`,
                        text: 'Change',
                        visuallyHiddenText: 'task content'
                    }
                ]
            }
        },
        {
            key: {
                text: 'Task content'
            },
            value: {
                text: taskContent
            },
            actions: {
                items: [
                    {
                        href: `${baseUrl}/task-content?mode=edit`,
                        text: 'Change',
                        visuallyHiddenText: 'task content'
                    }
                ]
            }
        },
        {
            key: {
                text: 'Task priority'
            },
            value: {
                text: mapPriorityLevelToText(taskPriority)
            },
            actions: {
                items: [
                    {
                        href: `${baseUrl}/task-priority?mode=edit`,
                        text: 'Change',
                        visuallyHiddenText: 'task priority'
                    }
                ]
            }
        },
        {
            key: {
                text: 'Task deadline'
            },
            value: {
                text: taskDeadlineFriendly
            },
            actions: {
                items: [
                    {
                        href: `${baseUrl}/task-deadline?mode=edit`,
                        text: 'Change',
                        visuallyHiddenText: 'task deadline'
                    }
                ]
            }
        }
    ]
}

export function checkAnswersViewModel(baseUrl, session) {
    return {
        backLinkUrl: `${baseUrl}/task-deadline`,
        pageHeading: 'Check your answers',
        summaryRows: mapSessionDataToSummaryRows(baseUrl, session),
    }
}