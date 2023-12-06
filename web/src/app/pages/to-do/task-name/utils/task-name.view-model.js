import { getSubmitButtonText } from '../../_utils/get-submit-button-text.js'
import { getBackLinkUrl } from '../../_utils/get-back-link-url.js'

export function taskNameViewModel(baseUrl, { todo }, mode) {
    const { taskName } = todo || {}
    
    return {
        backLinkUrl: getBackLinkUrl(baseUrl, mode, 'list'),
        submitButtonText: getSubmitButtonText(mode),
        pageTitle: 'What is the new task name?',
        taskNameValue: taskName
    }
}