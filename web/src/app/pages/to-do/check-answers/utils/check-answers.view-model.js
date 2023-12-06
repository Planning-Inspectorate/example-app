const mapSessionDataToSummaryRows = ({ todo }) => {
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
                            href: '#',
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
                            href: '#',
                            text: 'Change',
                            visuallyHiddenText: 'task content'
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
                            href: '#',
                            text: 'Change',
                            visuallyHiddenText: 'task deadline'
                        }
                    ]
                }
            },
            {
                key: {
                    text: 'Task priority'
                },
                value: {
                    text: taskPriority
                },
                actions: {
                    items: [
                        {
                            href: '#',
                            text: 'Change',
                            visuallyHiddenText: 'task priority'
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
        summaryRows: mapSessionDataToSummaryRows(session),
    }
}