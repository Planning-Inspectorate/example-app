import { getSubmitButtonText } from '../../_utils/get-submit-button-text.js'
import { getBackLinkUrl } from '../../_utils/get-back-link-url.js'


/**
 * 
 * @param {Object} session
 * @returns {Array}
 */
function getCategoryRadioOptions({ todo }) {
    const options = [
      {
        value: 'work',
        text: 'Work',
        checked: false
      },
      {
        value: 'hobby',
        text: 'Hobby',
        checked: false
      },
      {
        value: 'other',
        text: 'Other',
        checked: false
      }
    ]
  
    return options.map(option => {
      if (option.value === todo.taskCategory) {
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
export function taskCategoryViewModel(baseUrl, session, mode) {
    
    return {
        backLinkUrl: getBackLinkUrl(baseUrl, mode, 'task-content'),
        submitButtonText: getSubmitButtonText(mode),
        pageTitle: 'Which category is the task in?',
        categoryRadioOptions: getCategoryRadioOptions(session)
    }
}