import { isObjectEmpty } from '../../../../lib/is-object-empty.js'

const todoRequiredKeys = ['taskName', 'taskPriority']

/**
 * @typedef Task
 * @type { object }
 * @property { string } taskName
 * @property { string } taskContent
 * @property { string } taskDeadline
 * @property { number } taskPriority
 * 
 */


/**
 * 
 * @param { Task } obj 
 * @param { Array } keys 
 * @returns { boolean }
 */
function validateTaskData(obj, keys) {
    for (let key of keys) {
        if (!obj.hasOwnProperty(key) || !obj[key]) {
            return false;
        }
    }
    return true
}


/**
 * 
 * @param { Task } task 
 * @returns { object }
 */

export function getTaskPayload(task) {

    if(isObjectEmpty(task)) throw new Error('Session data for todo is empty')
    if(!validateTaskData(task, todoRequiredKeys)) throw new Error('Session data for a task is missing required keys or values')

    return {
        title: task.taskName,
        description: task.taskContent || null,
        taskDeadlineFriendly: task.taskDeadlineFriendly || null,
        priority: task.taskPriority
    }
}