/**
 * 
 * @param {string} baseUrl
 * @param {string} mode
 * @param {string} previousPageUrl
 * @returns {string}
 */
export function getBackLinkUrl(baseUrl, mode, previousPageUrl) {
    return mode === 'edit' ? `${baseUrl}/check-answers` : `${baseUrl}/${previousPageUrl}`
}