import {validationResult} from "express-validator";

const view = 'pages/challenges/user-input/view.njk';

/**
 *
 * @type {import('express').RequestHandler}
 */
export function getUserInput(req, res) {
    res.render(view, {
        backLinkUrl: '/',
        pageTitle: 'User input'
    });
}

/**
 *
 * @type {import('express').RequestHandler}
 */
export function postUserInput(req, res) {
    const emailValidationResult = validationResult(req);
    const { email } = req.body;
    if (!emailValidationResult.isEmpty()) {
        return res.render(view, {
            backLinkUrl: '/',
            pageTitle: 'User Input',
            errors: emailValidationResult.array(),
            emailAddress: email ? email : ''
        })
    }
    return res.redirect('/');

}