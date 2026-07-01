import { validationResult } from 'express-validator';

const view = 'pages/challenges/user-input/view.njk';



export function getUserInput(req, res) {
    res.render(view, {
         pageTitle: 'User Input',
         values:{}
         //pageHeading: 'User Input'
    });
}


export function postUserInput(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {

        const errorList = errors.array().map(err => ({
                text:err.msg,
                href:`#${err.param}`

        }));

		return res.status(400).render(view, {
            pageTitle: 'User Input',
            errorSummary: errorList,
            errors: errors.mapped(),
            values: req.body  
        });
	}

	return res.redirect('/challenges');
    //can redirect to account or sumbission ok page if we change the slug
}