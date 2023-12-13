export function taskViewModel(baseUrl, task) {
    return {
        backLinkUrl: `${baseUrl}/list`,
        task
    }
}