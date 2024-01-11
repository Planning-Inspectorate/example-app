const view = 'pages/challenges/success/view.njk';

export function getSuccess(req, res) {
    const { session } = req 
    const { email } = session
    res.render(view, {
        pageTitle: 'Success!',
        email
    })
    delete session.email
}


