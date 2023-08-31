/**
 * @typedef {Object} Task
 * @property {number} id - the id of the task
 * @property {string} title - the task title or description
 * @property {string} status - the current status of this task
 * @property {Date} createdAt - the date this task was created
 * @property {Date} [modifiedAt] - the date this task was last modified
 * @property {Date} [completedOn] - the date this task was completed
 */

/**
 * Generate a semi-random list of tasks
 *
 * @returns {Task[]}
 */
export function getTasks() {
    const dates = oneDatePerMonth();
    /** @type {Task[]} */
    const tasks = [];
    for (let i = 0; i < taskTitles.length; i++) {
        const status = pickRandom(statuses);
        /** @type {Task} */
        const task = {
            id: i + 1,
            title: taskTitles[i],
            status: status,
            createdAt: dates[i]
        };
        if (status === 'Done') {
            task.completedOn = addWeek(task.createdAt);
        }
        tasks.push(task);
    }
    return tasks;
}

const statuses = ['To Do', 'In Progress', 'Done', 'Cancelled'];
const taskTitles = [
    'Get the shopping',
    'Book holiday',
    'Buy present for John',
    'Organise family BBQ',
    'Take the car to the garage'
];

/**
 * Generate one date per month this year.
 *
 * @returns {Date[]}
 */
function oneDatePerMonth() {
	const year = new Date().getFullYear();
	const days = Array.from({ length: 28 }, (_, i) => i + 1);
	const dates = [];
	for (let i = 1; i < 13; i++) {
		const month = i.toString().padStart(2, '0');
		const day = pickRandom(days).toString().padStart(2, '0');
        const hour = pseudoRandomInt(9, 17).toString().padStart(2, '0');
		dates.push(new Date(`${year}-${month}-${day}T${hour}:00:00Z`));
	}
	return dates;
}

/**
 * Returns a pseudo random integer in the range [min, max)
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function pseudoRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

/**
 * Choose a psuedo random item from the given list
 *
 * @param {T[]} list
 * @returns {T}
 * @template T
 */
function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)];
}

/**
 * Add a week to the given date
 * 
 * @param {Date} date 
 * @returns {Date}
 */
function addWeek(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7, date.getHours());
}
