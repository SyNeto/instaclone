const {body} = require('express-validator');

exports.hasCaption = body('caption')
    .isLength({max: 140})
    .withMessage('Name is required, max length 140 characters.');