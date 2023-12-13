/**
 * 
    * @param {Object} requestBody
    * @returns {String}
 */
export function getTaskDeadlineDateInput({ 'task-deadline-day': day, 'task-deadline-month': month, 'task-deadline-year': year }) {
    return `${day}-${month}-${year}`
}