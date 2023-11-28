export function getTaskDeadlineDateInput({ 'task-deadline-day': day, 'task-deadline-month': month, 'task-deadline-year': year }) {
    return `${year}-${month}-${day}`
}