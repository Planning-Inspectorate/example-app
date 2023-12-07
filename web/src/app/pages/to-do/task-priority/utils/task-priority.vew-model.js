import { getBackLinkUrl } from '../../_utils/get-back-link-url.js'
import { getSubmitButtonText } from '../../_utils/get-submit-button-text.js'

/**
 * 
 * @param {Object} session
 * @returns {Array}
 */
function getPriorityRadioOptions({ todo }) {
  const options = [
    {
      value: 1,
      text: 'Low',
      checked: false
    },
    {
      value: 2,
      text: 'Medium',
      checked: false
    },
    {
      value: 3,
      text: 'High',
      checked: false
    }
  ]

  return options.map(option => {
    if (option.value === todo.taskPriority) {
      option.checked = true
    }
    return option
  })
}

/**
 * 
 * @param {String} baseUrl 
 * @param {Object} session
 * @param {String} mode
 * @returns {Object}
 */
export function taskPriorityViewModel(baseUrl, session, mode) {
    return {
        backLinkUrl: getBackLinkUrl(baseUrl, mode, 'task-content'),
        submitButtonText: getSubmitButtonText(mode),
        pageHeading: 'Select priority level',
        priorityRadioOptions: getPriorityRadioOptions(session)
    }
}   