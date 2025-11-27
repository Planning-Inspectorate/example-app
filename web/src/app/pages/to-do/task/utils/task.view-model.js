import getFormattedDate from "../../_utils/get-formatted-date.js";

function getTaskWithFormattedDates(task) {
    return {
        ...task,
        createdAt: getFormattedDate(task.createdAt),
        updatedAt: getFormattedDate(task.updatedAt),
        completeBy: getFormattedDate(task.completeBy)
    };
};

export function taskViewModel(baseUrl, task) {
    return {
        backLinkUrl: `${baseUrl}/list`,
        task: getTaskWithFormattedDates(task),
    };
};