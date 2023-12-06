export function getBackLinkUrl(baseUrl, mode, previousPageUrl) {
    return mode === 'edit' ? `${baseUrl}/check-answers` : `${baseUrl}/${previousPageUrl}`
}