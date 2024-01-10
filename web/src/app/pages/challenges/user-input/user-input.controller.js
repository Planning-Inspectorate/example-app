const view = 'pages/challenges/user-input/view.njk';

/**
 *
 * @type {import('express').RequestHandler}
 */

export function getUserInput(req, res) {
    res.render(view, {
        pageTitle: 'User input',
    })
}

export function postUserInput(req, res) {
    const { body, session } = req
    const { email, errors, errorSummary } = body

    if(errors) {
        return res.render(view, {
            pageTitle: 'User input',
            errors,
            errorSummary
        })
    }
    session.email = email 
    return res.redirect(`/challenges/success`)
}

