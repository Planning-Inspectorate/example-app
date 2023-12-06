import { getBackLinkUrl } from '../../_utils/get-back-link-url.js'
import { getSubmitButtonText } from '../../_utils/get-submit-button-text.js'

export function taskContentViewModel(baseUrl, { todo }, mode) {
    const { taskContent } = todo || {}

    return {
        backLinkUrl: getBackLinkUrl(baseUrl, mode, 'task-name'),
        submitButtonText: getSubmitButtonText(mode),
        pageHeading: 'Optional task details',
        taskContentValue: taskContent
    }
}