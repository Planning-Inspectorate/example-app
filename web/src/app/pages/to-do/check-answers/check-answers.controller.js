import { checkAnswersViewModel } from './utils/check-answers.view-model.js'

const view = 'pages/to-do/check-answers/view.njk'

export function getCheckAnswers(req, res) {
    const { session } = req
    const { locals } = res
    const { baseUrl } = locals

    res.render(view, checkAnswersViewModel(baseUrl, session))
}

export function postCheckAnswers(req, res) {
    const { locals } = res
    const { baseUrl } = locals
    

    //TODO: update db with new task

    return res.redirect(`${baseUrl}/check-answers`)
}