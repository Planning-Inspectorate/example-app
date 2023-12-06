import { getBackLinkUrl } from '../../_utils/get-back-link-url.js';
import { getSubmitButtonText } from '../../_utils/get-submit-button-text.js';

export function taskDeadlineViewModel(baseUrl, { todo }, mode) {
    return {
        backLinkUrl: getBackLinkUrl(baseUrl, mode, 'task-priority'),
        getSubmitButtonText: getSubmitButtonText(mode),
        submitButtonText: getSubmitButtonText(mode),
        pageHeading: 'What is the deadline for this task?',
        taskDeadline: todo.taskDeadline || {},
    }   
}