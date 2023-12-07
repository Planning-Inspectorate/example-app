/**
 * 
 * @param {string} baseUrl 
 * @returns {Object}
 */
export function startViewModel(baseUrl) {
    return {
        backLinkUrl: '/',
        pageHeading: 'Example journey',
        pageTitle: 'Example journey',
        nextPageURL: `${baseUrl}/list`
    }
}