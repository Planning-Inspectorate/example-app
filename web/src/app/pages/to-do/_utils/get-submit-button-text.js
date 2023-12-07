/**
 * 
 * @param {String} mode 
 * @returns {String}
 */
export function getSubmitButtonText(mode) {
    return mode === 'edit' ? 'Save' : 'Continue'
}